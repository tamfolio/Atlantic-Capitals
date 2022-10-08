import React from 'react';
import './BottomNav.css';
import {FaSearch} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {HiMenuAlt3} from 'react-icons/hi'

const BottomNav = () => {
  return (
    <div className="FooterNavbar">
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="nav-links">
        <ul className="links">
          <li><Link to="/">FAQ</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/contact">Privacy Policy</Link></li>
          <li><Link to="/contact">Terms and conditions</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
