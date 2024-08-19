import React from 'react';
import { NavLink } from "react-router-dom";
import './featureComponent.css'
export default function FeatureComponent({title,description,link}) {
  return (
    <div className='features-component'>
        <span className='feature-title'>{title}</span>
        <span className='feature-description'>{description}</span>
        <div className="button-div">
          <NavLink to={link}><button>Click to View</button></NavLink>
        </div>
    </div>
  )
}