import React from 'react'
import './featureComponent.css'
export default function FeatureComponent({title,description}) {
  return (
    <div className='features-component'>
        <span className='feature-title'>{title}</span>
        <span className='feature-description'>{description}</span>
        <div className="button-div">
          <button>Click to View</button>
        </div>
    </div>
  )
}