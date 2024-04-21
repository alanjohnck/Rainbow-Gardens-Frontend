import React, { useState } from 'react';
import './Cart.css';
import NavbarWithBorder from '../Navbar/NavbarWithBorder';
import { useDispatch, useSelector } from 'react-redux';
import decrementIcon from '../images/QuantityReduceButton.svg';
import incrementIcon from '../images/QuantityIncreaseButton.svg';
import line2 from '../images/Line 2.svg';
import Footer from '../Footer/Footer';
import { incrementQuantity,decrementQuantity } from '../Redux/Slice/ProductSlice';
import { addProductToCart } from '../Redux/Slice/CartSlice';

export default function Cart() {

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.product.cart);
  
  const handleIncrement = (index) =>{
    dispatch(incrementQuantity({index}));
  }

  const handleDecrement = (index) =>{
    dispatch(decrementQuantity({index}));
  }

  const handleCartSubmit=()=>{
    
  }

  const totalAmount = cartState.reduce((total,product)=>{
    return total+(product.productPrice * product.quantity);
  },0);
 
  return (
    <div className='cart'>
      <div className='cartContainer'>
        <NavbarWithBorder/>
        
        <div className='cartBottomContainer'>
          <div className='cartLeftContainer'>
            <div className='cartPageTitle'>
              <span>Cart Page</span>
            </div>

            {cartState.map((product,index)=>(
              <div className='productCard' key={index}>
                <div className='productImageDiv'>
                  <img src={product.productImage} alt='productImg'/>
                </div>
                
                <div className='productDescriptionDiv'>
                  <div className='productCardCategoryDiv'>
                     <button className='productCardButton'>{product.productCategory.split(' ')[0]}</button>
                  </div>

                  <div className='productCardTitleDiv'>
                    <span>{product.productName}</span>
                  </div>

                  <div className='productCardBottomDiv'>
                    <div className='productCardPriceDiv'>
                      <span>₹ {product.productPrice}</span>
                    </div>

                    <div className='productQuantityDiv'>
                      <img src={decrementIcon} alt='decrement' onClick={()=> handleDecrement(index)}/>
                      <span>{product.quantity}</span>
                      <img src={incrementIcon} alt='decrement'  onClick={()=> handleIncrement(index)}/>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className='cartRightContainer'>
            <div className='productCheckoutDiv'>
              <div className='checkoutTitle'>
                <span>Total Amount</span>
              </div>

              {cartState.map((product)=>(
                  <div className='productItemsContainer'>
                    <span>{product.productName}</span>
                    <span>₹ {product.productPrice * product.quantity}</span>
                  </div>
                ))}

                <div className='productFooterContainer'>
                  <img src={line2} alt='line2'/>
                  <div className='productTotalContainer'>
                    <span>Total</span>
                    <span>₹ {totalAmount}</span>
                  </div>
                </div>
              </div>

              <div className='cartContactDiv'>
                <div className='cartContactTitle'>
                  <span>Enter your details so we can get back to you</span>
                </div>

                <form className='cartContactForm'>
                  <div className='cartFormContent'>
                    <span>Full Name</span>
                    <input type='text' placeholder='Enter your full name'></input>
                  </div>

                  <div className='cartFormContent'>
                    <span>Email Address</span>
                    <input type='email' placeholder='Enter your email address'></input>
                  </div>

                  <div className='cartFormContent'>
                    <span>Phone Number</span>
                    <input type='text' placeholder='Enter your phone number'></input>
                  </div>

                  <div className='cartSubmitButtonContainer'>
                    <button className='cartSubmitButton'>Submit</button>
                  </div>
                </form>
              </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}
