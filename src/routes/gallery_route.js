import React from "react";
import Footer from "../components/footer/footer";
import GalleryDetail from "../components/gallery_detail/gallery_detail";
import Navbar from "../components/navbar/navbar";

const GalleryRoute = () => {
  return (
    <>
      <Navbar />
      <GalleryDetail />
      <Footer />
    </>
  );
};

export default GalleryRoute;
