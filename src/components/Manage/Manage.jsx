import React from 'react'
import './Manage.css';
import {HiOutlineChartBar} from 'react-icons/hi'

const Manage = () => {
  return (
    <div className='manage'>
        <div className="manage-top">
            <h3>See How We Manage Our Work</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero facilis consequatur deleniti, ipsa provident? Culpa tenetur incidunt reprehenderit qui.</p>
        </div>
        <div className="manage-bottom">
            <div className="manage-bottom-left"></div>
            <div className="manage-bottom-right">
                <div className="box">
                    <div className="box-left">
                        <HiOutlineChartBar className='bar-lines'/>
                    </div>
                    <div className="box-right">
                        <h3>Strategic Consulting Services</h3>
                        <p>At lectus ante ultricies pretium integer amet lobortis. Arcu aliquam senectus </p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-left">
                        <HiOutlineChartBar className='bar-lines'/>
                    </div>
                    <div className="box-right">
                        <h3>Strategic Consulting Services</h3>
                        <p>At lectus ante ultricies pretium integer amet lobortis. Arcu aliquam senectus </p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-left">
                        <HiOutlineChartBar className='bar-lines'/>
                    </div>
                    <div className="box-right">
                        <h3>Strategic Consulting Services</h3>
                        <p>At lectus ante ultricies pretium integer amet lobortis. Arcu aliquam senectus </p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-left">
                        <HiOutlineChartBar className='bar-lines'/>
                    </div>
                    <div className="box-right">
                        <h3>Strategic Consulting Services</h3>
                        <p>At lectus ante ultricies pretium integer amet lobortis. Arcu aliquam senectus </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manage