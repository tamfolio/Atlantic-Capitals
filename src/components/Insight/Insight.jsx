import React from 'react'
import './Insight.css'
import {BiCalendar} from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'


const Insight = () => {
  return (
    <div className='insight'>
        <p>Company News</p>
        <h3>Blog & Insight</h3>
        <div className="insight-container">
            <div className="insight-box">
                <img src="/images/insight.png" alt="" />
                <div className="insight-date">
                    <BiCalendar className='insight-date-icon'/>
                    <p>January 21, 2022 /<span>Business</span></p>
                </div>
                <div className="insight-header">
                    <h2>Business makes your earning double when you do it right</h2>
                </div>
                <div className="insight-more">
                    <a href="/">Read More</a>
                    <BsArrowRight/>
                </div>
            </div>
            <div className="insight-box">
                <img src="/images/insight2.png" alt="" />
                <div className="insight-date">
                    <BiCalendar className='insight-date-icon'/>
                    <p>January 21, 2022 /<span>Business</span></p>
                </div>
                <div className="insight-header">
                    <h2>Business makes your earning double when you do it right</h2>
                </div>
                <div className="insight-more">
                    <a href="/">Read More</a>
                    <BsArrowRight/>
                </div>
            </div>
            <div className="insight-box">
                <img src="/images/insight.png" alt="" />
                <div className="insight-date">
                    <BiCalendar className='insight-date-icon'/>
                    <p>January 21, 2022 /<span>Business</span></p>
                </div>
                <div className="insight-header">
                    <h2>Business makes your earning double when you do it right</h2>
                </div>
                <div className="insight-more">
                    <a href="/">Read More</a>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insight