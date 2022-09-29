import React from 'react'
import Footer from '../components/Footer/Footer'
import Homebanner2 from '../components/Homebanner/Homebanner2'
import Newsletter from '../components/Newsletter/Newsletter'
import Topbar from '../components/TopBar/Topbar'

const Blog = () => {
  return (
    <div>
    <Topbar/>
    <Homebanner2 title='Home/Blog' text='Our Blog'/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Blog