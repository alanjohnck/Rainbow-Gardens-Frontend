import React from 'react';
import './OutdoorPlants.css';
import Navbar from '../Navbar/Navbar';
import whatsappIcon from '../images/WhatsappIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import outdoorPlantData from './OutdoorPlants.json';
import Card from 'react-bootstrap/Card';
import expandIcon from '../images/CardViewImage.svg';
import likeIcon from '../images/Frame 30.svg';
import cardImage from '../images/CardImage.svg';
import Footer from '../Footer/Footer';

function OutdoorPlants() {
  return (
    <div className='outdoorPlantsContainer'>
        <div className='outdoorPlantsTopContainer'>
          <Navbar/>
          <span className='outdoorTitle'>Outdoor Plants</span>
          <div className='whatsappIconContainer'>
             <img src={whatsappIcon} alt='whatsappIcon'></img>
          </div>
          
        </div>

        <div className='outdoorPlantsMiddleContainer'>
            <SearchBar/>
             <div className='outdoorPlantsGridContainer'>
                <div className='outPlantsGrid'>
                    {
                        outdoorPlantData.map(plant => (
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
                        ))
                    }
                </div>
             </div>
        </div>

        <div className='outdoorPlantsBottomContainer'>
            <Footer/>
        </div>
    </div>
  )
}

export default OutdoorPlants