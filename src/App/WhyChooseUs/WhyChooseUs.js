import React from 'react';
import './WhyChooseUs.css';
import whyChooseUsImg from '../images/WhyChooseUsImg.svg';

export default function WhyChooseUs() {
  return (
    <div className='whyChooseUs'>
        <div className='whyChooseUsContainer'>
        <div className='whyChooseUsLeftContainer'>
          <div className='whyChooseUsTitleContainer'>
            <span>Why Choose Us?</span>
          </div>

          <div className='whyChooseUsContent'>
            <span>Sustainable Practices</span>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
            </p>
          </div>

          <div className='whyChooseUsContent'>
            <span>Sustainable Practices</span>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
            </p>
          </div>

          <div className='whyChooseUsContent'>
            <span>Sustainable Practices</span>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.
            </p>
          </div>
        </div>

        <div className='whyChooseUsRightContainer'>
          <div className='whyChooseUsImageContainer'>
            <img src={whyChooseUsImg} alt='whyChooseUsImg'/>
          </div>
        </div>
        </div>
    </div>
  )
}
