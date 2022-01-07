import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewAll = ({ reviews }) => {
  return (
    <div className="review_all">
      {reviews.map((review, i) => {
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
                        color={ratingValue <= rate ? "#f8cbad" : "#a5a5a5"}
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
  );
};

export default ReviewAll;
