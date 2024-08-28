import React, { useState, useEffect } from "react";
import "./Category.css";
import Navbar from "../Navbar/Navbar";
import whatsappIcon from "../images/WhatsappIcon.svg";
import SearchBar from "../SearchBar/SearchBar";
import Card from "react-bootstrap/Card";
import Placeholder from 'react-bootstrap/Placeholder';
import expandIcon from "../images/ExpandIcon.svg";
import cardImage from "../images/CardImage.svg";
import offerImage from "../images/OfferImage.svg";
import Footer from "../Footer/Footer";
import { useNavigate, NavLink } from "react-router-dom";

function Category() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [plantName, setPlantName] = useState('');
  const [loading, setLoading] = useState(true);
  const [plantsData, setPlantsData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 9;
  const navigate = useNavigate();
  
  useEffect(() => {
    const getProductAll = async () => {
      setLoading(true);
        // Fetch all products if no plant name is specified
        try {
          const response = await fetch(`http://localhost:3001/api/getproduct`);
          const data = await response.json();
          setPlantsData(data);
        } catch (e) {
          console.log(e);
        }
      setLoading(false);
    };

    getProductAll();
  }, [plantName]);

  const sendDataToParent = (name) => {
    setPlantName(name);
  }

  const handleExpandClick = (plantId) => {
    navigate(`/product/${plantId}`);
  };
 
  //handler for sorting
  const handleSort = (criteria) => {
    setSortCriteria(criteria);
  };
   //handler for sorting plants based on price,A-Z
  const sortPlants = (plants) => {
    if (!sortCriteria) return plants;
    return [...plants].sort((a, b) => {
      if (sortCriteria === 'price') {
        return a.plantPrice - b.plantPrice;
      } else if (sortCriteria === 'name') {
        return a.plantName.localeCompare(b.plantName);
      }
      return 0;
    });
  };

    // Pagination Logic
    const indexOfLastPlant = currentPage * plantsPerPage;
    const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
    const currentPlants = sortPlants(plantsData).slice(indexOfFirstPlant, indexOfLastPlant);
  
    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="categoryContainer">
      <div className="categoryTopDiv">
        <Navbar />
        <div className="categoryFlexDiv">
          <div className="categoryContentContainer">
            <div className="categoryContentDiv">
              <div className="categoryTitleDiv">
                <span>
                  Search our <br />
                  <span className="categoryTitleType2">Catalogue</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whatsappIconContainer">
        <NavLink to="https://wa.me/919980918073?text=I'm%20interested%20in%20your%20Plants%20">
          <img src={whatsappIcon} alt="whatsappIcon" />
        </NavLink> 
      </div>

      <div className="categoryMiddleDiv">
        <SearchBar sendDataToParent={sendDataToParent} onSort={handleSort} />

        <div className="plantButtonContainer">
          <button>
            <NavLink to="/plants/Indoor" className="button-link">
              <span className="button-text">Indoor Plants</span>
            </NavLink>
          </button>
          <button>
            <NavLink to="/plants/Outdoor" className="button-link">
              <span className="button-text">Outdoor Plants</span>
            </NavLink>
          </button>
          <button>
            <NavLink to="/plants/Flowering" className="button-link">
              <span className="button-text">Flowering Plants</span>
            </NavLink>
          </button>
          <button>
            <NavLink to="/plants/Prosperity" className="button-link">
              <span className="button-text">Prosperity Plants</span>
            </NavLink>
          </button>
          <button>
            <NavLink to="/plants/AirPurifier" className="button-link">
              <span className="button-text">Air Purifier Plants</span>
            </NavLink>
          </button>
        </div>

        <div className="recommendationContainer">
          <div className="recommendationTopDiv">
            <div className="recommendationTitle">
              <span>Top Recommendations</span>
            </div>
            {/* <div className="recommendationBottomDiv">
            <div className="recommendationBottomGridContainer">
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
                plantsData.slice(0, 3).map((plant) => (
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
            </div> */}
          </div>

          <div className="recommendationMiddleDiv">
            <div className="offerContainer">
              <div className="offerContent">
                <span>50% OFF on all Indoor Plants!!</span>
                <span>from 15th March to 25th March</span>
              </div>

              <div className="offerImage">
                <img src={offerImage} alt="offerImg" />
              </div>
            </div>
          </div>

          <div className="recommendationBottomDiv">
            <div className="recommendationBottomGridContainer">
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
                currentPlants
                  .filter((plant) => plant.plantName.toLowerCase().includes(plantName.toLowerCase()))
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
           {/* Pagination Controls */}
        <div className="pagination ">
          {Array.from({ length: Math.ceil(plantsData.length / plantsPerPage) }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
        </div>
      </div>

      <div className="categoryFooterDiv">
        <Footer />
      </div>
    </div>
  );
}

export default Category;