import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Subscribe Our Newsletter</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero facilis consequatur deleniti, ipsa provident? Culpa tenetur incidunt</p>
        <form className='newsletter-form'>
            <input type="email" placeholder='Enter your Email' />
            <button type='submit' className='newsletter-btn'>Subscribe Now</button>
        </form>

    </div>
  )
}

export default Newsletter