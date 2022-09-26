import React from 'react'
import ContactCall from '../components/About/ContactCall'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import Footer from '../components/Footer/Footer'
import Homebanner2 from '../components/Homebanner/Homebanner2'
import Topbar from '../components/TopBar/Topbar'
import '../components/ContactInfo/ContactInfo.css';

const Contact = () => {
  return (
    <>
        <Topbar/>
        <Homebanner2 title='Home/Contact' text='Contact'/>
        <ContactInfo/>
        <ContactCall className='mt-2'/>
        <div className="map-img">
        <img src="/images/map.png" alt="" className='contact-map'/>
         </div>
        <Footer/>
    </>
  )
}

export default Contact