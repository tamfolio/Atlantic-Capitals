import React from 'react';
import './Navbar.css';
import {FaSearch, FaChevronDown} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="nav-links">
        <ul className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact</a></li>
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
