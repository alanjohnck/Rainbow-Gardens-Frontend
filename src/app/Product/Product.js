import React from 'react';
import './Product.css';
import NavbarWithBorder from '../Navbar/NavbarWithBorder';
import productImg from '../images/ProductImage.svg';
import productImg1 from '../images/ProductImage1.svg';
import productImg2 from '../images/ProductImage2.svg';
import productLine from '../images/ProductLine.svg';
import whatsappIcon from '../images/WhatsaapSmallIcon.svg';
import Footer from '../Footer/Footer';


function Product() {
  return (
    <div className='productContainer'>
        <NavbarWithBorder/>
        <div className='productBottomDiv'>
           <div className='productBottomLeftDiv'>
              <div className='productImageDiv'>
                <div className='productImageTopDiv'>
                  <img src={productImg} alt='productImg'/>
                </div>

                <div className='productImageBottomDiv'>
                  <img src={productImg1} alt='productImg1'/>
                  <img src={productImg2} alt='productImg2'/>
                </div>
              </div>
           </div>

           <div className='productBottomRightDiv'>
             <div className='plantInfoDiv'>
                <div className='plantInfoTitle'>
                  <span>Small Plant in House</span>
                </div>
                <div className='plantInfo'>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</span>
                </div>
                <div className='plantPriceDiv'>
                  <span>₹ 250</span>
                </div>
                <div className='plantInfoButtonDiv'>
                  <button className='plantInfoButton'>Add to cart</button>
                </div>
             </div>

            <div className='plantFooterDiv'>
              <div className='plantFooterCategoryDiv'>
                <span>Categories:</span>
                <button>All Plants</button>
                <button>Indoor Plants</button>
                <button>Outdoor Plants</button>
              </div>
              <div className='productLineDiv'>
                <img src={productLine} alt='productLine'/>
              </div>
              <div className='footerDescriptionDiv'>
                <span>To know more about this plant or purchase this plant please click the below Whatsapp icon for smooth procedure</span>
              </div>
              <div className='footerButtonDiv'>
                <button className='footerButton'>
                  <img src={whatsappIcon} alt='whatsappIcon'/>
                  <span>+91 8999999999</span>
                </button>
              </div>

            </div>
           </div>
        </div>

        <div className='footerDiv'>
          <Footer/>
        </div>
    </div>
  )
}

export default Product