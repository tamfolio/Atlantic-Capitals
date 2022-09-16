import React from 'react'
import './Topbar.css'
import { FiPhone, FiMail } from 'react-icons/fi'
import {FaFacebookF,FaTwitter,FaLinkedin} from 'react-icons/fa'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbar-left">
            <div className="phone">
              <FiPhone/>
              <p className='ms-1'>080 1256 8964</p>
            </div>
            <div className="email">
              <FiMail/>
              <p className='ms-1'>info@newdesigning.com</p>
            </div>
            <div className="email">
              <FiMail/>
              <p className='ms-1'>info@newdesigning.com</p>
            </div>
        </div>
        <div className="topbar-icons">
          <FaFacebookF className='socials'/>
          <FaTwitter className='socials'/>
          <FaLinkedin className='socials'/>
          <FaLinkedin className='socials'/>
        </div>
    </div>
  )
}

export default Topbar