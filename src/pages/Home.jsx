import React from 'react'
import About from '../components/About/About'
import Brand from '../components/Brand/Brand'
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
    </>
  )
}

export default Home