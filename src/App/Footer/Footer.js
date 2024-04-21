import React from 'react';
import './Footer.css';
import twitter from '../images/Twitter.svg';
import ig from '../images/Ig.svg';
import fb from '../images/FB.svg';
import youTube from '../images/You tube.svg'
import { NavLink } from 'react-router-dom';
import mail from '../images/Mail.svg';
import location from '../images/Location.svg';
import phone from '../images/Phone.svg';
import footerLine from '../images/Line 1.svg';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footerTopDiv'>
          <div className='footerMainHeading'>
            <span>Find the plants that suits you!</span>
          </div>

          <div className='footerBottomHeading'>
            <span>Subscribe to forager to receive monthly plant tips, store updates, promotions and more</span>
          </div>
        </div>

        <div className='footerBottomDiv'>
          <div className='footerBottomLeftDiv'>
           <div className='footerBottomLeftContent'>
             <div className='footerContent'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.</span>
             </div>

             <div className='footerIconDiv'>
               <img src={twitter} alt='twitter'/>
               <img src={ig} alt='twitter'/>
               <img src={fb} alt='twitter'/>
               <img src={youTube} alt='youtubr'/>
             </div>
           </div>
          </div>

          <div className='footerBottomRightDiv'>
             <div className='linkContainer'>
                <span>Quick Links</span>
                <div className='linkContents'>
                    <NavLink to=''>
                      <span>Shop with us</span>
                    </NavLink>

                    <NavLink to=''>
                      <span>All Plants</span>
                    </NavLink>

                    <NavLink to=''>
                      <span>About us</span>
                    </NavLink>

                    <NavLink to=''>
                      <span>Cart</span>
                    </NavLink>
                </div>
             </div>

             <div className='footerContactContainer'>
               <span>Contact us</span>
               <div className='footerContactContents'>
                 <div className='footerContactContent'>
                  <img src={mail} alt='mail'/>
                  <span>hello@gmail.com</span>
                 </div>

                 <div className='footerContactContent'>
                  <img src={location} alt='mail'/>
                  <span>Riverside building,County hall,London SE1 7PB,United Kingdom</span>
                 </div>

                 <div className='footerContactContent'>
                  <img src={phone} alt='mail'/>
                  <span>451-484-5939</span>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className='footerCcDiv'>
         <div className='footerLineContainer'>
          <img src={footerLine} alt='footerLine'/>
         </div>

         <div className='ccSpan'>
            <span>Rainbow Gardens 2024</span>
         </div>
          
        </div>
    </div>
  )
}
