import React from 'react';
import './Footer.css';
import twitter from '../images/Twitter.svg';
import ig from '../images/Ig.svg';
import fb from '../images/FB.svg';
import youtube from '../images/You tube.svg';
import mail from '../images/Mail.svg';
import location from '../images/Location.svg';
import phone from '../images/Phone.svg';
import line from '../images/Line 1.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className='footerTopContainer'>
        <div className='footerTopDiv'>
          <span>Find the plants that suits you!</span>
          <span>Subscribe to The Forager to receive monthly plant tips, store updates,promotions and more </span>
        </div>
      </div>
      <div className='footerBottomContainer'>
        <div className='footerBottomLeftContainer'>
          <div className='footerBottomLeftContent'>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut</span>
          </div>
          <div className='footerIconsDiv'>
             <img src={twitter} alt='twitter'></img>
             <img src={ig} alt='ig'></img>
             <img src={fb} alt='fb'></img>
             <img src={youtube} alt='youtube'></img>
          </div>
        </div>
        <div className='footerBottomRightContainer'>
          <div className='footerBottomLinkContainer'>
             <span>Quick Links</span>
             <span>Shop with us</span>
             <span>All Plants</span>
             <span>About us</span>
             <span>Cart</span>
          </div>

          <div className='footerBottomContactContainer'>
            <div className='footerContactTitle'>
              <span>Contact Us</span>
            </div>
            <div className='footerContactDiv'>
              <div className='footerContactContent'>
                <img src={mail} alt='mail'></img>
                <span>hello@website.com</span>
              </div>
              <div className='footerContactContent'>
                <img src={location} alt='location'></img>
                <span>Riverside Building, County Hall, London SE1 7PB, United Kingdom</span>
              </div>
              <div className='footerContactContent'>
                <img src={phone} alt='mail'></img>
                <span>451-484-5939</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footerLine'>
        <img src={line} alt='line'/>
      </div>
      <div className='foooterFinalSpan'>
        <span>Rainbow Gardens 2024</span>
      </div>
    </div>
  )
}

export default Footer