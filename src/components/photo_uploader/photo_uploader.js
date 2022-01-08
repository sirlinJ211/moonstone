import React, { useState } from "react";
import { useRef } from "react";
import "./photo_uploader.css";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage } from "../../service/firebase";
import db from "../../service/firebase";
import { Link } from "react-router-dom";

const PhotoUploader = () => {
  const formRef = useRef();
  const projectNameRef = useRef();
  const projectPhotograherRef = useRef();
  const projectCategoryRef = useRef();
  const projectDateRef = useRef();
  const projectDescriptionRef = useRef();
  const [progress, setProgress] = useState(0);

  const resetBtn = () => {
    formRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_change",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          uploadData(url).then(() => alert("done"))
        );
      }
    );
  };

  const uploadData = async (url) => {
    const collectionRef = collection(db, "PhotoData");
    //with timestamp
    const payload = {
      projectImgSrc: url,
      projectName: projectNameRef.current.value,
      projectPhotograher: projectPhotograherRef.current.value,
      projectCategory: projectCategoryRef.current.value,
      projectDate: projectDateRef.current.value,
      projectDescription: projectDescriptionRef.current.value || "",
      timestamp: serverTimestamp(),
    };
    await addDoc(collectionRef, payload);
  };
  return (
    <div className="photo_uploader">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="photo">
          <div className="mainPhoto">
            <h3>Project Photo</h3>
            <input required type="file" accept="image/*" name="projectImg" />
          </div>
        </div>
        <div className="info">
          <h3>Infomation</h3>
          <div>
            <input
              required
              ref={projectNameRef}
              type="text"
              className="inputPName"
              name="projectName"
              placeholder="Project Name"
            />
          </div>
          <div>
            <input
              required
              ref={projectPhotograherRef}
              type="text"
              className="inputPhotograher"
              name="projectPhotograher"
              placeholder="Photograher"
            />
          </div>
          <div>
            <select
              required
              ref={projectCategoryRef}
              className="inputCategory"
              name="projectCategory"
              placeholder="category"
            >
              <option value="portrait">portrait</option>
              <option value="event">event</option>
              <option value="commercial">commercial</option>
              <option value="still-life">still-life</option>
              <option value="abstract">abstract</option>
              <option value="other">other</option>
            </select>
          </div>
          <div>
            <input
              required
              ref={projectDateRef}
              type="date"
              name="projectDate"
              className="inputDate"
            />
          </div>
          <div>
            <textarea
              ref={projectDescriptionRef}
              className="inputDescription"
              name="description"
              placeholder="description"
            ></textarea>
          </div>
        </div>

        <button type="submit">Upload</button>
        <button onClick={resetBtn}>Reset All</button>
        <p>Uploading: {progress} %</p>
      </form>
      <div className="link">
        <Link to="/gallery" className="link-gallery">
          - Move to Gallery -
        </Link>
      </div>
    </div>
  );
};

export default PhotoUploader;
