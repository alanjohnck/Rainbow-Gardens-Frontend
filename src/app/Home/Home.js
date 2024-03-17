import React from 'react';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import whatsappIcon from '../images/WhatsappIcon.svg';
import aboutImage from '../images/About.svg';
import data from './Home.json';
import cardImage from '../images/CardImage.svg';
import Card from 'react-bootstrap/Card';
import expandIcon from '../images/CardViewImage.svg';
import likeIcon from '../images/Frame 30.svg';
import faqIcon from '../images/FaqIcon.svg';
import Footer from '../Footer/Footer';



function Home() {
  return (
    <div className='homeContainer'>
      <div className='homeTopDiv'>
        <Navbar/>
        <div className='homeContent'>
          <span className='topContent'>Flourish</span>
          <span className='middleContent'>together</span>
          <span className='bottomContent'>Get the plant that makes you happy</span>
        </div>
        <div className='orderButtonDiv'>
          <button className='orderButton'>Order now</button>
        </div>
        <div className='whatsappIconDiv'>
          <img src={whatsappIcon} alt='whatsapp-icon'/>
        </div>
      </div>

      <div className='homeMiddleDiv'>
        <div className='categoryDiv'>
          <div className='categoryLeftDiv'>
            <div className='categoryLeftTopDiv'>
              <span className='categoryName'>All Plants</span>
            </div>
            <div className='categoryLeftBottomDiv'>
              <div className='categoryLeftBottomLeftDiv'>
               <span className='categoryName'>Air Purifier Plants</span>
              </div>
              <div className='categoryLeftBottomRightDiv'>
                <span className='categoryName'>Indoor Plants</span>
              </div>
            </div>
          </div>
          <div className='categoryRightDiv'>
            <div className='categoryRightLeftDiv'>
                <span className='categoryName'>Outdoor Plants</span>
            </div>
            <div className='categoryRightRightDiv'>
              <div className='categoryRightTopDiv'>
                 <span className='categoryName'>Flowering Plants</span>
              </div>
              <div className='categoryRightBottomDiv'>
                <span className='categoryName'>Prosperity Plants</span>
              </div>
            </div>
          </div>
        </div>

        <div className='aboutContainer'>
          <div className='aboutDiv'>
            <div className='aboutLeftDiv'>
              <span className='aboutTitle'>Why Choose Us?</span>
              <div className='aboutContent'>
                <span>Sustainable Practices</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
              </div>
              <div className='aboutContent'>
                <span>Licensed and Insured</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
              </div>
              <div className='aboutContent'>
                <span>Licensed and Insured</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
              </div>
            </div>
            <div className='aboutRightDiv'>
              <img src={aboutImage} alt='aboutImg'/>
            </div>
          </div>
        </div>

        <div className='latestContainer'>
          <div className='latestDiv'>
            <span className='latestTitle'>Latest Arrivals</span>
            <div className='latestArrivalDiv'>
              <div className='latestArrivalContent'>
               {data.plants.map((plant)=>(
                <div className='plantDiv'>
                  <Card className='plantCard'>
                    <Card.Img variant='top' src={cardImage} className='plantImageDiv'></Card.Img>
                    <img src={likeIcon} alt='likeIcon' className='likeIcon'/>
                    <Card.Body className='plantCardBody'>
                      <div className='plantCardContent'>
                        <span className='plantName'>{plant.plantName}</span>
                        <span className='plantDescription'>{plant.plantDescription}</span>
                        <span className='plantPrice'>₹{plant.price}</span>
                      </div>
                      <div className='expandIconDiv'>
                        <img src={expandIcon} alt='expandIcon'/>
                      </div>
                      
                    </Card.Body>
                  </Card>
                </div>
               ))}
              </div>
            </div>
          </div>
        </div>

        <div className='questionContainer'>
          <div className='questionDiv'>
            <span className='questionDivTitle'>Frequently Asked <span style={{color:'#003912'}}>Questions</span></span>
            {data.questions.map((faq)=>(
              <div className='faqDiv'>
                {faq.question}
                <img src={faqIcon} alt='faqIcon'/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='homeFooterDiv'>
        <Footer/>
      </div>
    </div>
  )
}

export default Home