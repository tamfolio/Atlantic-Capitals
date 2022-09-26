import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Homebanner2.css'

const Homebanner2 = ({title, text}) => {
  return (
    <div className='home-banner2'>
        <Navbar/>
        <div className="banner-contents">
          <h2>{title}</h2>
          <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Homebanner2