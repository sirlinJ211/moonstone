import React, { useState } from "react";
import "./gallery_popup.css";

const GalleryPopUp = ({ photoData }) => {
  const {
    projectName,
    projectPhotograher,
    projectCategory,
    projectDate,
    projectDescription,
    projectImgSrc,
  } = photoData;

  return (
    <div className="gallery-popup">
      <div className="popup-box">
        <div className="photo">
          <img src={projectImgSrc} alt="" />
        </div>
        <div className="photoInfo">
          <div className="block">
            <div className="tag">Project Name: </div>
            <div className="text">{projectName}</div>
          </div>
          <div className="block">
            <div className="tag">Photograher: </div>
            <div className="text">{projectPhotograher}</div>
          </div>
          <div className="block">
            <div className="tag">Category:</div>
            <div className="text">{projectCategory}</div>
          </div>
          <div className="block">
            <div className="tag">Project Date:</div>
            <div className="text">{projectDate}</div>
          </div>
          <div className="block">
            <div className="tag">Description:</div>
            <div className="text">{projectDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPopUp;
