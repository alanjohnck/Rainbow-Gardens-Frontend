import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import phoneImg from '../images/PhoneImg.svg';
import mailImg from '../images/MailImg.svg';
import locationImg from '../images/Location.svg';
import instaIcon from '../images/InstaIcon.svg';
import discordIcon from '../images/DiscordIcon.svg';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <div className='contactContainer'>
        <div className='contactTopDiv'>
          <Navbar/>
          <div className='contactCardContainer'>
            <div className='contactCard'>
                <div className='contactLeftDiv'>
                   <div className='contactInfoDiv'>
                    <div className='contactTitleDiv'>
                        <span>Contact Information</span>
                        <span>Say something and we will get back to you</span>
                    </div>
                    <div className='contactContentDiv'>
                        <div className='contactContent'>
                          <img src={phoneImg} alt='phoneImg'/>
                          <span>+1012 3456 789</span>
                        </div>

                        <div className='contactContent'>
                          <img src={mailImg} alt='phoneImg'/>
                          <span>rainbowgardens@gmail.com</span>
                        </div>

                        <div className='contactContent'>
                          <img src={locationImg} alt='phoneImg'/>
                          <span>132, Dartmouth street, Boston, Kumbalam, 02156 Kerala</span>
                        </div>
                    </div>

                    <div className='contactIconsDiv'>
                        <img src={instaIcon} alt='instaIcon'/>
                        <img src={discordIcon} alt='instaIcon'/>
                        <img src={discordIcon} alt='instaIcon'/>
                    </div>
                   </div>
                </div>
                <div className='contactRightDiv'>
                   <div className='contactRightTopDiv'>
                      <div className='contactUpperDiv'>
                        <div className='contactDetailsDiv'>
                          <span>First Name</span>
                          <input type='text' placeholder='Enter your first name'/>
                        </div>

                        <div className='contactDetailsDiv'>
                          <span>Last Name</span>
                          <input type='text' placeholder='Enter your last name'/>
                        </div>
                      </div>
                      <div className='contactLowerDiv'>
                      <div className='contactDetailsDiv'>
                          <span>Email Address</span>
                          <input type='email' placeholder='Enter your email address'/>
                        </div>

                        <div className='contactDetailsDiv'>
                          <span>Mobile Number</span>
                          <input type='text' placeholder='Enter your phone number'/>
                        </div>
                      </div>
                   </div>
                   <div className='contactRightBottomDiv'>
                      <div className='contactMessageDiv'>
                      <span>Message to us!</span>
                      <input type='text' placeholder='Enter your message'/>
                      </div>

                      <div className='contactButtonDiv'>
                        <button className='contactButton'>Send Message</button>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
        <div className='contactFooterDiv'>
           <Footer/>
        </div>
    </div>
  )
}

export default Contact