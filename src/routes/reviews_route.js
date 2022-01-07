import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import ReviewsDetail from "../components/reviews_detail/reviews_detail";

const ReviewsRoute = () => {
  return (
    <>
      <Navbar />
      <ReviewsDetail />
      <Footer />
    </>
  );
};

export default ReviewsRoute;
