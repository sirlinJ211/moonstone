import React, { useEffect, useState } from "react";
import "./reviews_detail.css";
import database from "../../service/firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import ReviewUploader from "../review_uploader/review_uploader";
import ReviewAll from "../reviews_all/review_all";

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
              <ReviewAll reviews={reviews} />
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
