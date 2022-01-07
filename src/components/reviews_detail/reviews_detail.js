import React, { useEffect, useState } from "react";
import "./reviews_detail.css";
import database from "../../service/firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { FaStar } from "react-icons/fa";
import ReviewUploader from "../review_uploader/review_uploader";

const ReviewsDetail = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, "reviews");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setReviews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  return (
    <div className="reviews_detail">
      <div className="container">
        <div className="content">
          <div className="col1">
            <h2>Reviews</h2>
            <div className="list">
              {reviews.map((review, i) => {
                const date = Date(review.timestamp.seconds).slice(4, 15);
                return (
                  <div className="review" key={i}>
                    <div className="reviewNRD">
                      <div className="name">{review.name}</div>
                      <div className="date">({date})</div>
                      <div className="stars">
                        {[...Array(5)].map((star, i) => {
                          const ratingValue = i + 1;
                          const rate = review.rate;
                          return (
                            <label key={i}>
                              <input
                                type="radio"
                                className="rating"
                                value={ratingValue}
                              />
                              <FaStar
                                className="star"
                                color={
                                  ratingValue <= rate ? "#f8cbad" : "#a5a5a5"
                                }
                                size={20}
                              />
                            </label>
                          );
                        })}
                      </div>
                    </div>
                    <div className="commment">"{review.review}"</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col2">
            <h2>Support us with your review!</h2>
            <div className="uploader">
              <ReviewUploader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDetail;
