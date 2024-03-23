import React from 'react';
import rainbowLogo from '../images/Group.svg';
import navbarDivider from '../images/NavbarDivider.svg';
import cartIcon from '../images/CartIcon.svg';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import rainbowGardens from '../images/RainbowLogo.svg';

function Navbar() {
   
  return (
    <div className='navbarContainer'>
       <div className='navbar'>
       
        <div className='navbarLeftDiv'>
          <img src={rainbowLogo} alt='rainbow-logo'/>
          <img src={navbarDivider} alt='navbar-divider'/>
          <img src={rainbowGardens} alt='rainbowLogo'/>
        </div>
       
        <div className='navbarRightDiv'>
        <NavLink to='/' className={({isActive})=> isActive ? 'active':'navbarContent'}>
           <span>Home</span>
        </NavLink>

        <NavLink to='/category' className={({isActive})=> isActive ? 'active':'navbarContent'}>
           <span>Shop</span>
        </NavLink>

        <NavLink to='/fertilizer' className={({isActive})=> isActive ? 'active':'navbarContent'}>
           <span>Fertilizer</span>
        </NavLink>

        <NavLink to='/contact' className={({isActive})=> isActive ? 'active':'navbarContent'}>
           <span>Contact Us</span>
        </NavLink>

        <NavLink to='/about' className={({isActive})=> isActive ? 'active':'navbarContent'}>
           <span>About Us</span>
        </NavLink>
          
        <img src={cartIcon} alt='cart-icon'/>
        </div>
       </div>
    </div>
  )
}

export default Navbar