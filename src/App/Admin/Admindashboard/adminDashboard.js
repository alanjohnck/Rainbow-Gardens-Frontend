import React from 'react'
import Footer from '../../Footer/Footer'
import './adminDashboard.css'
import AdminHeader from '../adminHeader'
import FeatureComponent from './adminfeatures/featureComponent'
export default function AdminDashBoard() {
  return (
    <div className='admin-dashboard'>
        <div className="admin-header-section">
            <AdminHeader/>
        </div>
        <div className="main-admin-content-section">
            <span className='admin-name'>Hi,Sangeeth Promod</span>
            <div className="main-admin-content-left-right-div">
                <div className="main-admin-content-left-section">
                    <FeatureComponent title="Account Settings" description="click to create New Product to be added to Product List"/>
                    <FeatureComponent title="Edit or Delete Existing Product" description="click to create New Product to be added to Product List"/>
                    <FeatureComponent title="Contact Us Queries" description="click to create New Product to be added to Product List"/>
                </div>
                <div className="main-admin-content-right-section">
                    <FeatureComponent title="Create New Product" description="click to create New Product to be added to Product List"/>
                    <FeatureComponent title="View Orders" description="click to create New Product to be added to Product List"/>
                </div>
            </div>
        </div>
        <div className="footer">
              <Footer/>
        </div>
    </div>
  )
}