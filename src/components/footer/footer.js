import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="content">
            <div className="col-1">
              <p>&copy; Moonstone Studio, Inc. All rights reserved.</p>
            </div>
            <div className="col-2">
              <div className="share text">Share with .</div>
              <div className="share icon">
                <FaFacebook
                  size={20}
                  style={{ color: "#d3d3d3", marginRight: "10px" }}
                />
                <FaInstagram
                  size={20}
                  style={{ color: "#d3d3d3", marginRight: "10px" }}
                />
                <FaTwitter
                  size={20}
                  style={{ color: "#d3d3d3", marginRight: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
