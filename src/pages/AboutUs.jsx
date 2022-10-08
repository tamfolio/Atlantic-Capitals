import React from 'react'
import About from '../components/About/About'
import CaseStudy2 from '../components/casestudy/CaseStudy2'
import Footer from '../components/Footer/Footer'
import Homebanner2 from '../components/Homebanner/Homebanner2'
import Numbers from '../components/Numbers/Numbers'
import Team2 from '../components/Team/Team2'
import Topbar from '../components/TopBar/Topbar'

const AboutUs = () => {
  return (
    <div className='about-page'>
        <Topbar/>
        <Homebanner2  title='Home/About-us' text='About us'/>
        <About/>
        <CaseStudy2/>
        <Numbers/>
        <Team2/>
        <Footer/>
    </div>
  )
}

export default AboutUs