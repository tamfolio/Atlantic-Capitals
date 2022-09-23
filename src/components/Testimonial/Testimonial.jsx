import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <p>Testimonials</p>
        <h3>User Feedbacks</h3>
        <div className="user-container">
            <div className="feedback">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus id nunc pellentesque sapien. Morbi lect massa aliquet eget diam eu duis. Massa pellentesque aliquam faucibus vel malesuada consectetur vulputate”</p>
                <hr/>
                <div className="user-details">
                    <div className="photo">
                        <img src="/images/user1.png" alt="" />
                    </div>
                    <div className="details">
                        <h1>Nnyigide E. Nancy</h1>
                        <p>CEO, Nana Drops</p>
                    </div>
                </div>
            </div>
            <div className="feedback">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus id nunc pellentesque sapien. Morbi lect massa aliquet eget diam eu duis. Massa pellentesque aliquam faucibus vel malesuada consectetur vulputate”</p>
                <hr/>
                <div className="user-details">
                    <div className="photo">
                        <img src="/images/user2.png" alt="" />
                    </div>
                    <div className="details">
                        <h1>Nnyigide E. Nancy</h1>
                        <p>CEO, Nana Drops</p>
                    </div>
                </div>
            </div>
            <div className="feedback">
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus id nunc pellentesque sapien. Morbi lect massa aliquet eget diam eu duis. Massa pellentesque aliquam faucibus vel malesuada consectetur vulputate”</p>
                <hr/>
                <div className="user-details">
                    <div className="photo">
                        <img src="/images/user3.png" alt="" />
                    </div>
                    <div className="details">
                        <h1>Nnyigide E. Nancy</h1>
                        <p>CEO, Nana Drops</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial