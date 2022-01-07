import React, { useEffect, useRef, useState } from "react";
import "./gallery_detail.css";
import database from "../../service/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  getDocs,
  where,
  getDoc,
  doc,
} from "@firebase/firestore";
import GalleryPopUp from "../gallery_popup/gallery_popup";
import { FaTimes } from "react-icons/fa";

const GalleryDetail = () => {
  const [photos, setPhotos] = useState([]);
  const [sort, setSort] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedPhotoID, setSelectedPhotoID] = useState(null);
  const categoryRef = useRef();
  const popupRef = useRef();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(false);
    setSelectedPhoto(null);
  };

  const selectPhoto = (event) => {
    const docRef = doc(database, "PhotoData", event.target.id);
    getDoc(docRef)
      .then((doc) => setSelectedPhoto(doc.data()))
      .then(() => setClick(true));
  };

  useEffect(() => {
    const collectionRef = collection(database, "PhotoData");
    const q = query(collectionRef, orderBy("timestamp", "asc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setPhotos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  const selectCategory = () => {
    setSort(categoryRef.current.value);
  };

  const galleryCard = (item, index) => {
    return (
      <div className="pics" key={index}>
        <img
          onClick={selectPhoto}
          className="pic"
          src={item.projectImgSrc}
          alt={item.projectName}
          id={item.id}
        />
        {item.projectName} ({item.projectDate})
      </div>
    );
  };

  return (
    <div className="gallery_datail">
      <div className="container">
        <div className="content">
          <div className="category">
            Category:
            <select
              className="selectedCategory"
              ref={categoryRef}
              onChange={selectCategory}
            >
              <option value="all">All</option>
              <option value="portrait">Portrait</option>
              <option value="event">Event</option>
              <option value="commercial">Commercial</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="list">
            {photos.map((item, index) => {
              if (sort === "all") {
                if (item) {
                  return galleryCard(item, index);
                }
              }
              if (sort === "other") {
                if (
                  item.projectCategory === "still-life" ||
                  item.projectCategory === "abstract"
                ) {
                  return galleryCard(item, index);
                }
              }
              if (
                sort === "portrait" ||
                sort === "event" ||
                sort === "commercial"
              )
                if (item.projectCategory === sort) {
                  return galleryCard(item, index);
                }
            })}
          </div>

          {selectedPhoto == null && click == false ? null : (
            <div className="popup">
              <i className="bx bxs-x" onClick={handleClick}>
                <FaTimes size={20} style={{ color: "#f8cbad" }} />
              </i>
              <GalleryPopUp photoData={selectedPhoto} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
