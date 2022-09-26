import React from 'react'
import Footer from '../components/Footer/Footer'
import Homebanner2 from '../components/Homebanner/Homebanner2'
import Topbar from '../components/TopBar/Topbar'

const Blog = () => {
  return (
    <div>
    <Topbar/>
    <Homebanner2 title='Home/Blog' text='Our Blog'/>
    <Footer/>
    </div>
  )
}

export default Blog