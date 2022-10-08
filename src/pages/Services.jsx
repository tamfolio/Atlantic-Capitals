import React from 'react'
import CaseStudy2 from '../components/casestudy/CaseStudy2'
import Footer from '../components/Footer/Footer'
import Homebanner2 from '../components/Homebanner/Homebanner2'
import Newsletter from '../components/Newsletter/Newsletter'
import Offer from '../components/Offer/Offer'
import Prcing from '../components/Pricing/Prcing'
import Topbar from '../components/TopBar/Topbar'

const Services = () => {
  return (
    <>  
        <Topbar/>
        <Homebanner2 title='Home/About-us' text='Our Services'/>
        <Offer/>
        <CaseStudy2/>
        <Prcing/>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default Services