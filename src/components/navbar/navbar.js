import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../image/favicon.ico";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="name">MOONSTONE STUDIO</div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="zip" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#f8cbad" }} />
          ) : (
            <FaBars size={20} style={{ color: "#f8cbad" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
