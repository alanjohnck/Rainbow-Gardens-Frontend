import React from 'react';
import './Cart.css';
import NavbarWithBorder from '../Navbar/NavbarWithBorder';
import cartData from './Cart.json';
import cartImg from '../images/CartImage.svg';
import decrement from '../images/DecrementCounter.svg';
import increment from '../images/IncrementCounter.svg';
import cartLine from '../images/CartLine.svg';
import Footer from '../Footer/Footer';

function Cart() {
  return (
    <div className='cartContainer'>
        <NavbarWithBorder/>
        <div className='CartBottomDiv'>
            <div className='cartBottomLeftDiv'>
              <div className='cartDiv'>
                <div className='cartTitle'>
                    <span>Cart Page</span>
                </div>
                <div className='cartCardDiv'>
                    {cartData.map((item)=>(
                        <div className='cartCard'>
                           <div className='cartCardLeftDiv'>
                            <img src={cartImg} alt='cartImg'/>
                           </div>
                           <div className='cartCardRightDiv'>
                            <div className='cardCardButtonDiv'>
                                <button className='cartCardButton'>{item.buttonName}</button>
                            </div>
                            <div className='cartCardTitle'>
                                <span>{item.title}</span>
                            </div>
                            <div className='cartCardPriceDiv'>
                                <span>{item.price}</span>
                            </div>
                            <div className='cardCounterDiv'>
                                <img src={decrement} alt='decrement'/>
                                <span>{item.count}</span>
                                <img src={increment} alt='increment'/>
                            </div>
                           </div>
                        </div>
                    ))}
                </div>
              </div>
            </div>

            <div className='cartBottomRightDiv'>
              <div className='amountDiv'>
                <div className='amountTitle'>
                    <span>Total Amount</span>
                </div>
                <div className='amountDetails'>
                  {cartData.map((item)=>(
                        <div className='amountDetailsDiv'>
                            <span>{item.title}</span>
                            <span>{item.price}</span>
                        </div>
                  ))}
                </div>
                <div className='amountFooter'>
                    <img src={cartLine} alt='cartLine'/>
                    <div className='totalDiv'>
                        <span>Total</span>
                        <span>₹ 500</span>
                    </div>
                </div>
              </div>

              <div className='detailsDiv'>
                 <div className='detailsTitle'>
                    <span>Enter your details so we can get back to you</span>
                 </div>
                 <div className='detailsContent'>
                    <span>Full Name</span>
                    <input type='text' placeholder='Enter your full name'/>
                 </div>
                 <div className='detailsContent'>
                    <span>Email Address</span>
                    <input type='email' placeholder='Enter your email address'/>
                 </div>
                 <div className='detailsContent'>
                    <span>Whatsapp Number</span>
                    <input type='text' placeholder='Enter your whatsapp number'/>
                 </div>
                 <div className='detailsButtonDiv'>
                    <button className='detailsSubmitButton'>Submit</button>
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

export default Cart