import React from 'react';
import './Faq.css';
import faqIcon from '../images/FaqIcon.svg';

export default function Faq() {
  return (
    <div className='faq'>
     <div className='faqContainer'>
        <div className='faqTitle'>
            <span>Frequently Asked <span className='questionSpan'>Questions</span></span>
        </div>
        <div className='faqDiv'>
          <span>How do you purchase plants</span>
          <div className='faqIconContainer'>
            <img src={faqIcon} alt='faqIcon'/>
          </div>
        </div>

        <div className='faqDiv'>
         <span>From where are the plants imported</span> 
         <div className='faqIconContainer'>
            <img src={faqIcon} alt='faqIcon'/>
          </div>
        </div>

        <div className='faqDiv'>
         <span>Is the fertilizer natural</span>
         <div className='faqIconContainer'>
            <img src={faqIcon} alt='faqIcon'/>
          </div>
        </div>

     </div>
    </div>
  )
}
