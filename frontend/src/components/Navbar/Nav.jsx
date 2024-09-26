import React, { useContext, useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { shopContext } from '../../Context/ShopContext'

const Nav = () => {
  const [menu, setmenu] = useState("shop");
  const [count, setcount] = useState(0);
  const { getTotalCartItems } = useContext(shopContext);

  const logout =()=>{
    localStorage.removeItem('auth-token');
    window.location.replace("/");
  }
  return (
    <div className='Navbar'>
      <div className="nav1">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul>
        <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/">Shop</NavLink></li>
        <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/Men">Men</NavLink></li>
        <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/Women">Women</NavLink></li>
        <li><NavLink className={(e) => { return e.isActive ? "active" : "" }} to="/Kids">Kids</NavLink></li>
      </ul>
      <div className="nav3">
        {localStorage.getItem('auth-token')
          ? <button onClick={()=>{logout()}}>Logout</button>:<button><NavLink to="/login">Login</NavLink></button>
        }
        <NavLink to='/cart'><img src={cart} alt="carticon" /></NavLink>
        <div className="count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Nav
