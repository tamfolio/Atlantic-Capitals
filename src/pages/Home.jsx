import React from 'react'
import About from '../components/About/About'
import Brand from '../components/Brand/Brand'
import CaseStudy from '../components/casestudy/CaseStudy'
import Homebanner from '../components/Homebanner/Homebanner'
import Manage from '../components/Manage/Manage'
import Offer from '../components/Offer/Offer'
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
    </>
  )
}

export default Home