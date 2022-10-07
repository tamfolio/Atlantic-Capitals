import React from 'react';
import './Pricing.css';
import {BsCheck2Circle} from 'react-icons/bs';

const Prcing = () => {
  return (
    <div className="pricing">
      <p>Pricing</p>
      <h3>Our Pricing Plans</h3>
      <div className="pricing-container">
        <div className="price-plan">
          <div className="package">
            <h2>Startup Plan</h2>
          </div>
          <h1>$49<span>/month</span></h1>
          <div className="package-plans">
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Real time monthly startup</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>24/7 Customer support</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Voice & Video calling support</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Collaboratiove Whiteboard</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Role based access control</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Priority iOs & Android option</p>
            </div>
          </div>
          <a href="/" className="botn">Select Plan</a>
        </div>
        <div className="price-plan">
          <div className="package">
            <h2>Regular Plan</h2>
          </div>
          <h1>$49<span>/month</span></h1>
          <div className="package-plans">
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Real time monthly startup</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>24/7 Customer support</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Voice & Video calling support</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Collaboratiove Whiteboard</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Role based access control</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Priority iOs & Android option</p>
            </div>
          </div>
          <a href="/" className="botn">Select Plan</a>
        </div>
        <div className="price-plan">
          <div className="package">
            <h2>Premium Plan</h2>
          </div>
          <h1>$49<span>/month</span></h1>
          <div className="package-plans">
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Real time monthly startup</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>24/7 Customer support</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Voice & Video calling support</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Collaboratiove Whiteboard</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Role based access control</p>
            </div>
            <div className="plan">
              <BsCheck2Circle className="plan-icon" />
              <p>Priority iOs & Android option</p>
            </div>
          </div>
          <a href="/" className="botn">Select Plan</a>
        </div>
      </div>
    </div>
  );
};

export default Prcing;
