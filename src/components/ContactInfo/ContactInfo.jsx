import React from 'react';
import './ContactInfo.css';
import {FiPhone, FiMail} from 'react-icons/fi';
import {VscLocation} from 'react-icons/vsc';

const ContactInfo = () => {
  return (
    <>
    <div className="contact-info">
      <div className="contact-box">
        <h3>Catch Us Here</h3>
        <h2>We'd love to <br /> hear from you anytime</h2>
        <div className="contact-info-container">
          <div className="contact-info-box">
            <div className="contact-icon">
              <VscLocation className="contact-info-icon" />
            </div>
            <div className="contact-text">
              <h1>Our Office</h1>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            </div>
          </div>
          <div className="contact-info-box">
            <div className="contact-icon">
              <FiMail className="contact-info-icon" />
            </div>
            <div className="contact-text">
              <h1>Send a mail</h1>
              <p>info@newdesign.com</p>
              <p>contact@newdesign.com</p>
            </div>
          </div>
          <div className="contact-info-box">
            <div className="contact-icon">
              <FiPhone className="contact-info-icon" />
            </div>
            <div className="contact-text">
              <h1>Call Us</h1>
              <p>080 1234 4567</p>
              <p>080 5678 1234 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactInfo;
