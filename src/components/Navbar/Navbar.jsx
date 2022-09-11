import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="/images/logo.png" alt="" />
        </div>
        <div className="nav-links">
            <ul className='links'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar