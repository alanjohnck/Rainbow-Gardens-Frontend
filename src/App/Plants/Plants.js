import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Plants.css';
import Card from 'react-bootstrap/Card';
import expandIcon from '../images/ExpandIcon.svg';
import cardImage from '../images/CardImage.svg';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function Plants() {
    const [selectedPlant, setSelectedPlant] = useState(null);
    const {plantsCategory} = useParams();
    //plantsCategory will give you the category of the plant.Then make get request to fetch the plants data according to the categroy

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
        <div className="plantsContainer">
            <div className="plantsTopDiv">
                <Navbar />
                <div className="plantsFlexDiv">
                    <div className="plantsContentContainer">
                        <div className="plantsContentDiv">
                            <div className="plantsTitleDiv">
                                <span>
                                    choose <br />
                                    <span className="plantsTitleType2">{plantsCategory} Plants</span>
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
              <div className="plantDiv" key={plant.pno}>
                <Card className="plantCard">
                  <Card.Img
                    variant="top"
                    src={plant.images[0]}
                    style={{backgroundPosition:"center",backgroundSize:"cover",}}
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
                        <img src={expandIcon} alt="expandIcon" />
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
