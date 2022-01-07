import React from "react";
import About from "../about/about";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Navbar from "../navbar/navbar";
import Reviews from "../reviews/reviews";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <About />
      <div className="homeContent">
        <Gallery />
        <Reviews />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
