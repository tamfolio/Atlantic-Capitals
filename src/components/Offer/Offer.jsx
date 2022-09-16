import React from 'react'
import './Offer.css'
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-container">
        <h5>What we do</h5>
        <h2>What we Offer</h2>
        <div className="offer-box-container">
            <div className="offer-box">
                <div className="offer-icon">
                  <VscWorkspaceTrusted className='offer-icon'/>
                </div>
                <h2>Strategic Consulting Services</h2>
                <p>At lectus ante ultricies pretium integer amet lobortis. Arcu aliquam senectus scelerisque. Quisque proin mauris </p>
            </div>
            <div className="offer-box">
                <div className="offer-icon">
                  <VscWorkspaceTrusted className='offer-icon'/>
                </div>
                <h2>Strategic Consulting Services</h2>
                <p>At lectus ante ultricies pretium integer amet lobortis. Arcu aliquam senectus scelerisque. Quisque proin mauris </p>
            </div>
            <div className="offer-box">
                <div className="offer-icon">
                  <VscWorkspaceTrusted className='offer-icon'/>
                </div>
                <h2>Strategic Consulting Services</h2>
                <p>At lectus ante ultricies pretium integer amet lobortis. Arcu aliquam senectus scelerisque. Quisque proin mauris </p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Offer