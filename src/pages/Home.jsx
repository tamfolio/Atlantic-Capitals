import React from 'react'
import About from '../components/About/About'
import Brand from '../components/Brand/Brand'
import CaseStudy from '../components/casestudy/CaseStudy'
import Community from '../components/Community/Community'
import Footer from '../components/Footer/Footer'
import Homebanner from '../components/Homebanner/Homebanner'
import Insight from '../components/Insight/Insight'
import Manage from '../components/Manage/Manage'
import Newsletter from '../components/Newsletter/Newsletter'
import Offer from '../components/Offer/Offer'
import Prcing from '../components/Pricing/Prcing'
import Team from '../components/Team/Team'
import Testimonial from '../components/Testimonial/Testimonial'
import Topbar from '../components/TopBar/Topbar'

const Home = () => {
  return (
    <>
        <Topbar/>
        <Homebanner/>
        <Offer/>
        <Brand/>
        <About/>
        <Manage/>
        <CaseStudy/>
        <Community/>
        <Testimonial/>
        <Prcing/>
        <Team/>
        <Newsletter/>
        <Insight/>
        <Footer/>
    </>
  )
}

export default Home