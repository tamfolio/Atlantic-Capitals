import React from 'react';
import './BottomNav.css';
import { Link } from "react-router-dom";

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
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms and conditions</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
