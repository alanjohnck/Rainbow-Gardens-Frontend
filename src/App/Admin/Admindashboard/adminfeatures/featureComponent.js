import React from 'react';
import { NavLink } from "react-router-dom";
import './featureComponent.css'
export default function FeatureComponent({title,description,link}) {
  return (
    <div className='featuresComponent'>
        <span className='featureTitle'>{title}</span>
        <span className='featureDescription'>{description}</span>
        <div className="buttonDiv">
          <NavLink to={link}><button>Click to View</button></NavLink>
        </div>
    </div>
  )
}