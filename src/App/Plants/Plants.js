import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Plants.css';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import expandIcon from '../images/ExpandIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import indoorImg from '../images/IndoorImage.svg';
import outdoorImg from '../images/OutdoorImage.svg';
import Airpurifier from '../images/Airpurifier.jpg';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Slice/ProductSlice";
import prosperityImg from "../images/prosperity.jpg"
import floweringImg from "../images/flowering.jpg"

function Plants() {
  const [loading, setLoading] = useState(true); // State to track loading status
  const { plantsCategoryParams } = useParams();
  const [plantName, setPlantName] = useState('');
  const [plantCategory, setPlantCategory] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [plantsData, setPlantsData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleExpandClick = (plantId) => {
    navigate(`/product/${plantId}`);
  };

  const sendDataToParent = (plantName) => {
    setPlantName(plantName);
  }

  useEffect(() => {
    const getPlantsByCategory = async () => {
      setLoading(true); // Start loading
      if(plantsCategoryParams !== 'All'){
        try {
          const response = await fetch(`http://localhost:3001/api/getproduct?category=${plantsCategoryParams}+Plant`);
          const data = await response.json();
          console.log(data)
          setPlantsData(data);
        } catch (e) {
          console.log(e);
        }
      }
      else{
        try {
          const response = await fetch(`http://localhost:3001/api/getproduct`);
          const data = await response.json();
          setPlantsData(data);
        } catch (e) {
          console.log(e);
        }
      }
      setLoading(false); // End loading
    };

    const getProductByName = async () => {
      setLoading(true);
      if (plantName) {
        try {
          const url =`http://localhost:3001/api/getplantname/${encodeURIComponent(plantName)}`
          console.log('url : ',url); 
          const response = await fetch(url);
          const data = await response.json();
          setPlantsData(Array.isArray(data)? data : []); // Assign the fetched data to plantsData state
        } catch (e) {
          console.log(e);
        }
      }
      setLoading(false);
    };
  
    // Fetch data based on category or search
    if (plantName) {
      getProductByName();
    } else {
      getPlantsByCategory();
    }

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
        setBackgroundImage(floweringImg);
        break;
      case 'Prosperity':
        setPlantCategory('Prosperity');
        setBackgroundImage(prosperityImg);
        break;
      case 'AirPurifier':
        setPlantCategory('AirPurifier');
        setBackgroundImage(Airpurifier);
        break;
      default:
        setPlantCategory('All');
        setBackgroundImage(Airpurifier);
    }
  }, [plantsCategoryParams, plantName]);

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
          <SearchBar sendDataToParent={sendDataToParent} />
        </div>

        <div className="plantsDisplayContainer">
          <div className="PlantsGridDisplayContainer">
            {loading ? (
              // Placeholder for loading state
              Array.from({ length: 3 }).map((_, idx) => (
                <div className="plantDiv" key={idx}>
                  <Card className="plantCard">
                  <Placeholder as="div" animation="glow" className="plantCardPlaceholderImage plantPlaceholder" />
                  <Card.Body className="plantCardBody">
                      <div className="plantTitle">
                        <Placeholder as="span" animation="glow">
                          <Placeholder xs={6} />
                        </Placeholder>
                      </div>
                      <div className="plantCardBottomDiv">
                        <div className="plantCardLeftDiv">
                          <div className="plantDescription">
                            <Placeholder as="span" animation="glow">
                              <Placeholder xs={12} />
                            </Placeholder>
                          </div>
                          <div className="plantPrice">
                            <Placeholder as="span" animation="glow">
                              <Placeholder xs={4} />
                            </Placeholder>
                          </div>
                        </div>
                        <div className="plantCardRightDiv">
                          <Placeholder as="img" animation="glow" src={expandIcon} alt="expandIcon" />
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))
            ) : (
              plantsData
                .filter(plant => {
                  if (plantCategory !== 'All') {
                    return plant.category === `${plantCategory} Plant` || plant.category === `${plantCategory} plant`;
                  }
                  return true; // When plantCategory is 'All', include all plants
                  })
                .slice(0, 9)
                .map((plant) => (
                  <div className="plantDiv" key={plant.pno}>
                    <Card className="plantCard">
                      <Card.Img
                        variant="top"
                        src={plant.images[0]}
                        style={{ height: '180px', width: '100%', objectFit: 'cover' }}
                        className="plantCardImage"
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
                            <img src={expandIcon} alt="expandIcon" onClick={() => handleExpandClick(plant.Pno)} />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
            )}
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
