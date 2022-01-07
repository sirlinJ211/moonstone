import React from "react";
import "./about.css";
import imgSrc from "../../image/home_about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="content">
          <img className="aboutImg" src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
