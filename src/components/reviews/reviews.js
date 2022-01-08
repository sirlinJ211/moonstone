import React, { useEffect, useState } from "react";
import "./reviews.css";
import database from "../../service/firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, "reviews");
    const q = query(collectionRef, orderBy("rate", "desc"));
    const unsub = onSnapshot(q, (snapshot) =>
      setReviews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  }, []);

  return (
    <div className="reviews">
      <div className="container">
        <div className="content">
          <h2>REVIEWS</h2>
          <div className="list">
            {reviews.slice(0, 5).map((review, i) => {
              const date = review.timestamp.slice(4, 15);
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
      </div>
    </div>
  );
};

export default Reviews;
