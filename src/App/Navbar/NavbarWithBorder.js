import React from 'react'
import { NavLink } from 'react-router-dom';
import rainbowLogo from '../images/RainbowLogo.svg';
import cartIcon from '../images/CartIcon.svg';

export default function NavbarWithBorder() {
  return (
    <div className='navbar'>
     <div className='navbarContainerWithBorder'>
       <div className='logoContainer'>
         <img src={rainbowLogo} alt='rainbowLogo'/>
       </div>

       <div className='navbarContentsContainer'>
         <NavLink to='/' className={({isActive}) => isActive ? "active" : "navbarContent"}>
            <span>Home</span>
         </NavLink>

         <NavLink to='/products'  className={({isActive}) => isActive ? "active" : "navbarContent"}>
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
          <img src={cartIcon} alt='cartIcon'/>
         </div>
       </div>
     </div>
    </div>
  )
}
