import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import phoneImg from '../images/PhoneImg.svg';
import mailImg from '../images/MailImg.svg';
import locationImg from '../images/LocationImg.svg';
import igIcon from '../images/IgIcon.svg';
import discordIcon from '../images/DiscordIcon.svg';
import Footer from '../Footer/Footer';

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contactTopDiv'>
        <Navbar/>
        <div className='contactBottomDiv'>
            <div className='contactContainer'>
              <div className='contactLeftContainer'>
                <div className='contactLeftHeaderDiv'>
                  <span>Contact Information</span>
                  <span>Say something and we will get back to you!</span>
                </div>

                <div className='contactLeftMiddleDiv'>
                  <div className='contactLeftContent'>
                    <img src={phoneImg} alt='phoneImg'/>
                    <span>+1012 3456 798</span>
                  </div>

                  <div className='contactLeftContent'>
                    <img src={mailImg} alt='phoneImg'/>
                    <span>rainbowgardens@gmail.com</span>
                  </div>

                  <div className='contactLeftContent'>
                    <img src={locationImg} alt='phoneImg'/>
                    <span>132 Dartmouth street Boston, Kumbalam 02156 Kerala</span>
                  </div>
                </div>

                <div className='contactLeftIconDiv'>
                    <img src={igIcon} alt='igIcon'/>
                    <img src={discordIcon} alt='discordIcon'/>
                    <img src={discordIcon} alt='discordIcon'/>
                </div>
              </div>

              <div className='contactRightContainer'>
                <form className='contactForm'>
                  <div className='contactFormDiv'>
                    <div className='contactFormContent'>
                      <span>First Name</span>
                      <input type='text' placeholder='Enter your first name'/>
                    </div>

                    <div className='contactFormContent'>
                      <span>Last Name</span>
                      <input type='text' placeholder='Enter your last name'/>
                    </div>
                  </div>

                  <div className='contactFormDiv'>
                    <div className='contactFormContent'>
                      <span>Email Address</span>
                      <input type='email' placeholder='Enter your email address'/>
                    </div>

                    <div className='contactFormContent'>
                      <span>Mobile Number</span>
                      <input type='text' placeholder='Enter your mobile number'/>
                    </div>
                  </div>

                  <div className='contactMessageDiv'>
                    <span>Message to us!</span>
                    <input type='text' placeholder='Enter your message'/>
                  </div>

                  <div className='contactButtonContainer'>
                    <button className='contactButton'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
      <div className='contactFooterContainer'>
      <Footer/>
      </div>
      
    </div>
  )
}
