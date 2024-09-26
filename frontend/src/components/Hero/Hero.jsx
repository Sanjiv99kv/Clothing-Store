import React from 'react'
import handicon from '../../assets/hand_icon.png'
import arrowicon from '../../assets/arrow.png'
import heroimage from '../../assets/hero_image.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hero-text'>
            <div className="hand-icon">
                <p>New</p>
                <img src={handicon} alt="" />
            </div>
            <p>Collections</p>
            <p>For everyone</p>
        </div>
        <div className="hero-btn">
            <div>Latest Collections</div>
            <img src={arrowicon} alt="" />

        </div>
      </div>
      <div className="hero-right">
        <img src={heroimage} alt="" />
      </div>
    </div>
  )
}

export default Hero
