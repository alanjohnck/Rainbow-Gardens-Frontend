import React from 'react'
import './adminHeader.css'
import rainbowLogo from '../../images/rainbowLogo copy.svg'
export default function AdminHeader() {
  return (
    <div className='adminHeader'>
      <div className="header">
            <img src={rainbowLogo} alt="" />
            <div className="admin-profile-section">
                  <span>SP</span>
            </div>
      </div>
    </div>
  )
}