import React from 'react'
import Homebanner from '../components/Homebanner/Homebanner'
import Offer from '../components/Offer/Offer'
import Topbar from '../components/TopBar/Topbar'

const Home = () => {
  return (
    <>
        <Topbar/>
        <Homebanner/>
        <Offer/>
    </>
  )
}

export default Home