import React from 'react'
import Footer from '../../Footer/Footer'
import './adminDashboard.css'
import AdminHeader from '../adminHeader/adminHeader'
import FeatureComponent from './adminfeatures/featureComponent'

export default function AdminDashBoard() {
  return (
    <div className='adminDashboard'>
        <div className="adminHeaderSection">
            <AdminHeader/>
        </div>
        <div className="mainAdminContentSection">
            <span className='adminName'>
                Hi, Sangeeth Promod
            </span>
            <div className="mainAdminContentLeftRightDiv">
                <div className="mainAdminContentLeftSection">
                    <FeatureComponent
                         title="Account Settings" 
                         description="click to view the Account Settings"
                         link="/"
                    />
                    <FeatureComponent 
                        title="Edit or Delete Existing Product"
                        description="click to Update or Delete the existing Product list" 
                        link="/"
                    />
                    <FeatureComponent
                         title="Contact Us Queries" 
                         description="click to create New Product to be added to Product List" 
                         link="/"
                    />
                </div>
                <div className="mainAdminContentRightSection">
                    <FeatureComponent 
                        title="Create New Product"
                        description="click to create New Product to be added to Product List" 
                        link="/productAdding"
                    />
                    <FeatureComponent 
                        title="View Orders" 
                        description="click to view the orders you made" 
                        link="/"
                    />
                </div>
            </div>
        </div>
        <div className="footer">
              <Footer/>
        </div>
    </div>
  )
}
