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
      <div className='footerTopDiv'>
        <span className='footerTopTitle'>Find the plants that suits you!</span>
        <span className='footerBottomTitle'>Subscribe to The Forager to receive monthly plant tips, store updates,promotions and more </span>
      </div>
      <div className='footerBottomDiv'>
        <div className='footerBottomTopDiv'>
          <div className='footerBottomLeftDiv'>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut</span>
            <div className='footerLogoDiv'>
                <img src={twitter} alt='twitter'></img>
                <img src={ig} alt='ig'></img>
                <img src={fb} alt='fb'></img>
                <img src={youtube} alt='youtube'></img>
            </div>
          </div>
          <div className='footerBottomRightDiv'>
            <div className='linkDiv'>
              <span className='linkTitle'>Quick Links</span>
              <div className='linkContents'>
                <span className='linkContent'>Shop with us</span>
                <span className='linkContent'>All Plants</span>
                <span className='linkContent'>About us</span>
                <span className='linkContent'>Cart</span>
              </div>
            </div>
            <div className='contactDiv'>
              <span className='linkTitle'>Contact Us</span>
              <div className='linkContents'>
                <div className='linkContent'>
                  <img src={mail} alt='mail'></img>
                  <span>hello@website.com</span>
                </div>
                <div className='linkContent'>
                <img src={location} alt='location'></img>
                  <span>Riverside Building, County Hall, London SE1 7PB, United Kingdom</span>
                </div>
                <div className='linkContent'>
                <img src={phone} alt='mail'></img>
                  <span>451-484-5939</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footerBottomBottomDiv'>
            <div className='lineDiv'>
                <img src={line} alt='line'></img>
            </div>
            <span className='ccSpan'>Rainbow Gardens 2024</span>
        </div>
      </div>
    </div>
  )
}

export default Footer