import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./review_uploader.css";
import database from "../../service/firebase";
import { collection, addDoc } from "@firebase/firestore";

const ReviewUploader = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const collectionRef = collection(database, "reviews");
    const payload = {
      name,
      rate: rating,
      review,
      timestamp: Date(),
    };
    await addDoc(collectionRef, payload)
      .then(() => {
        alert("Thank you for leaving a review");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
      });
    setName(null);
    setReview(null);
    setRating(null);
    formRef.current.reset();
  };

  return (
    <div className="review_uploader">
      <form ref={formRef} className="review_form" onSubmit={handleSubmit}>
        <div className="part1">
          <input
            type="text"
            placeholder="Name"
            className="review_name"
            onChange={(e) => setName(e.target.value)}
          />
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  className="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= (hover || rating) ? "#f8cbad" : "#a5a5a5"
                  }
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <div className="part2">
          <textarea
            className="commment"
            placeholder="Leave your Feedback"
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <button
            className="reviewSubmit"
            type="submit"
            style={{ visibility: loader ? "hidden" : "visible" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewUploader;
