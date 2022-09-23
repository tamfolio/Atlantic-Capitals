import React from 'react';
import './Footer.css';
import {FaFacebookF,FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import {FiPhone, FiMail} from 'react-icons/fi';
import {GrLocation} from 'react-icons/gr';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="foot">
          <h1>About Company</h1>
          <div className="foot-data">
          <p>
            Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          </div>
          <div className="team-social-icons">
                        <div className="icon-wrapper">
                            <FaTwitter className="team-social-icon"/>
                        </div>
                        <div className="icon-wrapper">
                            <FaLinkedinIn className="team-social-icon"/>
                        </div>
                        <div className="icon-wrapper">
                            <FaFacebookF className="team-social-icon"/>
                        </div>
                        <div className="icon-wrapper">
                            <FaFacebookF className="team-social-icon"/>
                        </div>
                    </div>
        </div>
        <div className="foot">
        <h1>Our Services</h1>
            <div className="foot-data">
            
                <p>Business Planning</p>
                <p>Tax Strategy</p>
                <p>Financial Advices</p>
                <p>Insurance Strategy</p>
                <p>Manage Investment</p>
            </div>
          
        </div>
        <div className="foot">
          <h1>Company Hours</h1>
          <div className="foot-data">
          <p>Mon - 8:00 - 21:00</p>
          <p>Tues - 8:00 - 21:00</p>
          <p>Wed - 8:00 - 21:00</p>
          <p>Thu - 8:00 - 21:00</p>
          <p>Sun - 8:00 - 21:00</p>
          </div>
          
        </div>
        <div className="foot">
          <h1>Our Company</h1>
          <div className="foot-data">
            <FiPhone />
            <div className="numbers">
              <p>080 1256 8964</p>
              <p>080 1256 8964</p>
            </div>
          </div>
          <div className="foot-data">
            <FiMail />
            <div className="numbers">
              <p>info@newdesigning.com</p>
            </div>
          </div>
          <div className="foot-data">
            <GrLocation />
            <div className="numbers">
              <p>24/B, Hilington City Tower NYC,US</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" />
    </div>
  );
};

export default Footer;
