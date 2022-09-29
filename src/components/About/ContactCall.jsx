import React from 'react'
import Button from '../button/Button'
import './About.css'

const ContactCall = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <h2>Send Message</h2>
            <h1>Send Your Message To Us</h1>
         <Button text={'Submit Now'} className='mt-5'/>
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