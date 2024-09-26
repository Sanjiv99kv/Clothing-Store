import React from 'react'
import './Nav.css'
import navlogo from '../../assets/nav-logo.svg';
import navprofile from '../../assets/nav-profile.svg';

const Nav = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' />
      <img src={navprofile} className='nav-profile' />
    </div>
  )
}

export default Nav
