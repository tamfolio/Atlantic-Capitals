import React from 'react'
import './CaseStudy.css'

const CaseStudy = () => {
  return (
    <div className='casestudy'>
        <p>Case Study</p>
        <h3>Case Study</h3>
        <div className="case-study-box">
            <div className="case-box">
                <img src="/images/casestudy1.png" alt="" />
                <div className="case-text">
                    <h6>Business</h6>
                    <h3>Business Growth</h3>
                </div>
            </div>
            <div className="case-box">
                <img src="/images/casestudy2.png" alt="" />
                <div className="case-text">
                    <h6>Finance</h6>
                    <h3>Financial Plan</h3>
                </div>
            </div>
            <div className="case-box">
                <img src="/images/casestudy3.png" alt="" />
                <div className="case-text">
                    <h6>Marketing</h6>
                    <h3>Marketing Advice</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseStudy