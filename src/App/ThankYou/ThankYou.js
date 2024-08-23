import React from "react";
import './ThankYou.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import VectorThankYou from '../images/VectorThankYou.svg';
import CapaThankYou from '../images/CapaThankYou.svg';

export default function ThankYou() {
    return(
        <div className="thankyou">
            <Navbar/>
            <div className="innerThankYou">
                <div className="centerBox">
                    <img 
                        src={VectorThankYou} 
                        alt="first vector" 
                        className="vector1"
                    />
                    <div className="thankYouText">
                        <h1 className="text1">Thank You for Contacting us!</h1>
                        <h2 className="text2">We will get back to you shortly.</h2>
                    </div>
                    <div className="thankYouButtons">
                        <NavLink to="/">
                            <button className="Button">Back to Homepage</button>
                        </NavLink>
                        <NavLink to="/contact">
                            <button className="Button">Message Us</button>
                        </NavLink>
                    </div>
                    <img 
                        src={CapaThankYou} 
                        alt="capa vector" 
                        className="capa1"
                    />           
                </div>
            </div>
            <Footer/>
        </div>
    );
}