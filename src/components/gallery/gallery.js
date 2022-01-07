import React, { useEffect, useRef, useState } from "react";
import photos from "./photos.js";
import "./gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const delay = 4000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="gallery">
      <div className="container">
        <div className="content">
          <div className="slideshow-text">
            <div
              className="slideText"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {photos.map((image, index) => (
                <p className="text" key={index}>
                  {image.text}
                </p>
              ))}
            </div>
          </div>
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {photos.map((image, index) => (
                <div
                  className="slide"
                  key={index}
                  style={{ backgroundImage: `url(${image.urls})` }}
                ></div>
              ))}
            </div>
            <div className="slideshowDots">
              {photos.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="link">
            <Link to="/gallery" className="about-link">
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
