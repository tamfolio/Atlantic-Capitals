import React from 'react';
import './Team.css';
import {FaFacebookF,FaTwitter, FaLinkedinIn} from 'react-icons/fa';

const Team = () => {
  return (
    <div className='team'>
        <p>Team Members</p>
        <h3>Our Team members</h3>
        <div className="team-container">
            <div className="team-member">
                <img src="/images/team1.png" alt="" />
                <div className="team-content">
                    <p>Founder</p>
                    <h4>Alonso D. Dowson</h4>
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
                    </div>
                </div>
            </div>
            <div className="team-member">
                <img src="/images/team2.png" alt="" />
                <div className="team-content">
                    <p>Founder</p>
                    <h4>Alonso D. Dowson</h4>
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
                    </div>
                </div>
            </div>
            <div className="team-member">
                <img src="/images/team3.png" alt="" />
                <div className="team-content">
                    <p>Founder</p>
                    <h4>Alonso D. Dowson</h4>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team