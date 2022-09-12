import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Homebanner.css'

const Homebanner = () => {
  return (
    <div className='home-banner'>
        <Navbar/>
        <div className="banner-contents">
          <h2>We help you</h2>
          <h1>We help you to build financial support</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quis blandit quis fringilla felis ultrices enim sit commodo.</p>
          <a href="/" className="btn1">Get Free Consultations</a>
        </div>
    </div>
  )
}

export default Homebanner