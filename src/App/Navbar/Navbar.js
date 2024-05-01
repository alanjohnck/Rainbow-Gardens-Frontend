import React from 'react';
import './Navbar.css';
import rainbowLogo from '../images/RainbowLogo.svg';
import { NavLink } from 'react-router-dom';
import cartIcon from '../images/CartIcon.svg';

export default function Navbar() {
  return (
    <div className='navbar'>
     <div className='navbarContainer'>
       <div className='logoContainer'>
         <img src={rainbowLogo} alt='rainbowLogo'/>
       </div>

       <div className='navbarContentsContainer'>
         <NavLink to='/' className={({isActive}) => isActive ? "active" : "navbarContent"}>
            <span>Home</span>
         </NavLink>

         <NavLink to='/category'  className={({isActive}) => isActive ? "active" : "navbarContent"}>
            <span>Shop</span>
         </NavLink>

         <NavLink to='/fertilizer'  className={({isActive}) => isActive ? "active" : "navbarContent"}>
            <span>Fertilizer</span>
         </NavLink>

         <NavLink to='/contact'  className={({isActive}) => isActive ? "active" : "navbarContent"}>
            <span>Contact us</span>
         </NavLink>

         <NavLink to='/about'  className={({isActive}) => isActive ? "active" : "navbarContent"}>
            <span>About us</span>
         </NavLink>

         <div className='cartIconContainer'>
         <NavLink to='/cart'>
           <img src={cartIcon} alt='cartIcon'/>
         </NavLink>
         </div>
       </div>
     </div>
    </div>
  )
}
