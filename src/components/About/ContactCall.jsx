import React from 'react'
import Button from '../button/Button'
import './About.css'

const ContactCall = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <h2>Send Message</h2>
            <h1>Send Your Message To Us</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            <div className="sub-section">
                <div className="left">
                    <img src="/images/sub2.png" alt="" />
                </div>
                <div className="right">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.</p>
                </div>
            </div>
            <div className="sub-section reverse mb-5">
                <div className="left2">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.</p>
                </div>
                <div className="right2">
                    <img src="/images/sub1.png" alt="" />
                </div>
            </div>
            <Button text={'Explore more about us'} className='mt-5'/>
        </div>
        <div className="about-right">
            <div className="blue-backdrop"></div>
            <img src="/images/contact-call.png"  className='about-right-img' alt="" />
            <img src="/images/about-logo.png"  className='about-right-logo' alt="" />
        </div>
    </div>
  )
}

export default ContactCall