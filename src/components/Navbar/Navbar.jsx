import React from 'react';
import './Navbar.css';
import {FaSearch, FaChevronDown} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="nav-links">
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/">FAQ</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="search_lang">
          <FaSearch/>
          <div className="lang">
            <p>English</p>
            <FaChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
