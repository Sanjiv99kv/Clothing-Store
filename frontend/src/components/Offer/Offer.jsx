import React from 'react'
import './Offer.css'
import exclusive_imgage from '../../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>

      </div>
      <div className="offer-right">
        <img src={exclusive_imgage} alt=""/>
      </div>
    </div>
  )
}

export default Offer
