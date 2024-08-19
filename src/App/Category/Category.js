import React, { useState } from "react";
import "./Category.css";
import Navbar from "../Navbar/Navbar";
import whatsappIcon from "../images/WhatsappIcon.svg";
import SearchBar from "../SearchBar/SearchBar";
import plantData from "../Home/Home.json";
import Card from "react-bootstrap/Card";
import expandIcon from "../images/ExpandIcon.svg";
import cardImage from "../images/CardImage.svg";
import offerImage from "../images/OfferImage.svg";
import Footer from "../Footer/Footer";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function Category() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    setSelectedPlant(item);
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Name: {item.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          Price: ₹ {item.price}
        </span>
      </>
    );
  };

  const plantItems = plantData.plants.map((plant, index) => ({
    id: index,
    name: plant.plantName,
    description: plant.plantDescription,
    price: plant.price,
  }));

  return (
    <div className="categoryContainer">
      <div className="categoryTopDiv">
        <Navbar />
        <div className="categoryFlexDiv">
          <div className="categoryContentContainer">
            <div className="categoryContentDiv">
              <div className="categoryTitleDiv">
                <span>
                  Search our <br></br>
                  <span className="categoryTitleType2">Catalogue</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="whatsappIconContainer">
        <img src={whatsappIcon} alt="whatsappIcon" />
      </div>

      <div className="categoryMiddleDiv">
        {/* <div className="search-bar">
          <ReactSearchAutocomplete
            items={plantItems}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
          <span>{plantData.plants.plantName}</span>
        </div> */}
        <SearchBar />

        <div className="plantButtonContainer">
          <button>Indoor Plants</button>
          <button>Outdoor Plants</button>
          <button>Flowering Plants</button>
          <button>Prosperity Plants</button>
          <button>Air Purifier Plants</button>
        </div>

        <div className="recommendationContainer">
          <div className="recommendationTopDiv">
            <div className="recommendationTitle">
              <span>Top Recommendations</span>
            </div>

            <div className="recommendationGridContainer">
              <div className="recommendationTopGridContainer">
                {selectedPlant && (
                  <div className="selectedPlantContainer">
                    <Card className="plantCard">
                      <Card.Img
                        variant="top"
                        src={cardImage}
                        className="plantCardImage"
                      />
                      <Card.Body className="plantCardBody">
                        <div className="plantTitle">
                          <span>{selectedPlant.name}</span>
                        </div>

                        <div className="plantCardBottomDiv">
                          <div className="plantCardLeftDiv">
                            <div className="plantDescription">
                              <span>{selectedPlant.description}</span>
                            </div>

                            <div className="plantPrice">
                              <span>₹ {selectedPlant.price}</span>
                            </div>
                          </div>

                          <div className="plantCardRightDiv">
                            <img src={expandIcon} alt="expandIcon" />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              </div>
            </div>
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
              {plantData.plants.slice(0, 3).map((plant) => (
                <div className="plantDiv">
                  <Card className="plantCard">
                    <Card.Img
                      variant="top"
                      src={cardImage}
                      className="plantCardImage"
                    ></Card.Img>
                    <Card.Body className="plantCardBody">
                      <div className="plantTitle">
                        <span>{plant.plantName}</span>
                      </div>

                      <div className="plantCardBottomDiv">
                        <div className="plantCardLeftDiv">
                          <div className="plantDescription">
                            <span>{plant.plantDescription}</span>
                          </div>

                          <div className="plantPrice">
                            <span>₹ {plant.price}</span>
                          </div>
                        </div>

                        <div className="plantCardRightDiv">
                          <img src={expandIcon} alt="expandIcon" />
                        </div>
                      </div>
                      {/* <div className='plantDetailsDiv'>
                    <div className='plantDetailsTopDiv'>
                     <div className='plantTitle'>
                       <span>{plant.plantName}</span>
                     </div>

                     <div className='plantDescription'>
                       <span>{plant.plantDescription}</span>
                     </div>
                     </div>
                    
                    <div className='plantPrice'>
                      <span>{plant.price}</span>
                    </div>
                  </div>
                  
                  <div className='viewPlantDiv'>
                    <img src={expandIcon} alt='expandIcon'/>
                  </div> */}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
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
