import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Plants.css';
import Card from 'react-bootstrap/Card';
import expandIcon from '../images/ExpandIcon.svg';
import Footer from '../Footer/Footer';
import {useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import indoorImg from '../images/IndoorImage.svg';
import outdoorImg from '../images/OutdoorImage.svg';
import Airpurifier from '../images/Airpurifier.jpg';

function Plants() {
  const navigate = useNavigate();

  const { plantsCategoryParams } = useParams();

  const [plantCategory, setPlantCategory] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [plantsData, setPlantsData] = useState([]); // State for API data
//image fixing,background image fixing

  const handleExpandClick = (plantId) => {
    navigate(`/product/${plantId}`);
  };

  useEffect(() => {
    const getPlantsByCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/getproduct?category=${plantsCategoryParams}+Plant`);
        const data = await response.json();
        setPlantsData(data); // Assign the fetched data to plantsData state
      } catch (e) {
        console.log(e);
      }
    };

    getPlantsByCategory();

    // Set category and background image based on route params
    switch (plantsCategoryParams) {
      case 'Indoor':
        setPlantCategory('Indoor');
        setBackgroundImage(indoorImg);
        break;
      case 'Outdoor':
        setPlantCategory('Outdoor');
        setBackgroundImage(outdoorImg);
        break;
      case 'Flowering':
        setPlantCategory('Flowering');
        setBackgroundImage('../flowering');
        break;
      case 'Prosperity':
        setPlantCategory('Prosperity');
        setBackgroundImage('../prosperity');
        break;
      case 'AirPurifier':
        setPlantCategory('Airpurifier');
        setBackgroundImage(Airpurifier);
        break;
      default:
        setPlantCategory('');
        setBackgroundImage('');
    }
  }, [plantsCategoryParams]);


  return (
    <div className="plantsContainer">
      <div className="plantsTopDiv" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <div className="plantsFlexDiv">
          <div className="plantsContentContainer">
            <div className="plantsContentDiv">
              <div className="plantsTitleDiv">
                <span>
                  choose <br />
                  <span className="plantsTitleType2">{plantCategory} Plants</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="plantsMiddleDiv">
        <div className="plantsMiddleTopDiv">
          <SearchBar />
        </div>

        <div className="plantsDisplayContainer">
          <div className="PlantsGridDisplayContainer">
            {plantsData.slice(0, 9).map((plant) => (
              <div className="plantCardContainer" key={plant.pno}>
                <Card className="plantCard">
                  <Card.Img
                    variant="top"
                    src={plant.images[0]}
                    //style={{backgroundPosition:"center",backgroundSize:"cover",}}
                    className="plantCardImageContainer"
                  />
                  <Card.Body className="plantCardBody">
                    <div className="plantTitle">
                      <span>{plant.plantName}</span>
                    </div>
                    <div className="plantCardBottomDiv">
                      <div className="plantCardLeftDiv">
                        <div className="plantDescription">
                          <span>{plant.plantDescriptionForCard}</span>
                        </div>
                        <div className="plantPrice">
                          <span>₹ {plant.plantPrice}</span>
                        </div>
                      </div>
                      <div className="plantCardRightDiv">
                        <img 
                          src={expandIcon} 
                          alt="expandIcon"
                          onClick={() => handleExpandClick(plant.Pno)}
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="plantsFooterDiv">
        <Footer />
      </div>
    </div>
  );
}

export default Plants;
