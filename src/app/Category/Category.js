import React from 'react';
import './Category.css';
import Navbar from '../Navbar/Navbar';
import whatsappIcon from '../images/WhatsappIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import plantData from '../Home/Home.json';
import Card from 'react-bootstrap/Card';
import expandIcon from '../images/CardViewImage.svg';
import likeIcon from '../images/Frame 30.svg';
import cardImage from '../images/CardImage.svg';
import offerImage from '../images/OfferImage.svg';
import Footer from '../Footer/Footer';

function Category() {
  return (
    <div className='category'>
        <div className='categoryTopDiv'>
           <Navbar/>
           <div className='whatsappIcon'>
            <img src={whatsappIcon} alt='whatsappIcon'/>
           </div>
        </div>

        <div className='categoryMiddleDiv'>
            <div className='categoryMiddleTopDiv'>
              <SearchBar/>
              <div className='plantCategoryDiv'>
                <span>Indoor Plants</span>
                <span>Outdoor Plants</span>
                <span>Flowering Plants</span>
                <span>Prosperity Plants</span>
                <span>Air Purifier Plants</span>
              </div>
            </div>

            <div className='categoryMiddleCenterDiv'>
                <span className='recommendationTitle'>Top recommendations</span>
                <div className='recommendationGridContainer'>
                  <div className='recommendationTopGrid'>
                    {plantData.plants.map(plant => (
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

                  <div className='offerDiv'>
                    <div className='offerContent'>
                      <span className='offerTopContent'>50% OFF on all Indoor Plants</span>
                      <span className='offerBottomContent'>from 15th March to 25th March</span>
                    </div>
                    <div className='offerImageDiv'>
                       <img src={offerImage} alt='offerImage'/>
                    </div>
                  </div>

                  <div className='recommendationBottomGrid'>
                  {plantData.plants.slice(0,3).map(plant => (
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

        <div className='categoryBottomDiv'>
            <Footer/>
        </div>
    </div>
  )
}

export default Category