import React from 'react'
// import home from '../../Assets/home.png';
import { NavLink } from "react-router-dom";
import './Header.css';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

export default function Header() {
  return (
    <nav className="header">
      <div className="brand">
         <NavLink to="/" className="brandName">Mobile<span className="brandMiddle">Kart</span> <span className="brandIcon"><PhoneIphoneIcon/></span></NavLink> 
      </div>
      <div className="headerRight">
      <NavLink to="/shop" activeClassName='options' className='navLink' >
          Shop
        </NavLink>
        <NavLink to="/shop" activeClassName='options' className='navLink' >
            Wishlist
        </NavLink>
        <NavLink to="/shop" activeClassName='options' className='navLink' >
            Checkout
        </NavLink>
      </div>
    </nav>
  )
}




