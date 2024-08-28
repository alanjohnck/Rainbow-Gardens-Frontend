import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import './adminDashboard.css';
import AdminHeader from '../adminHeader/adminHeader';
import FeatureComponent from './adminfeatures/featureComponent';

export default function AdminDashBoard() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of the JWT token
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      // If no token is found, redirect to the login page
      navigate('/adminLogin');
    }
  }, [navigate]);

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
                         link="/resetPassword"
                    />
                    <FeatureComponent 
                        title="Edit or Delete Existing Product"
                        description="click to Update or Delete the existing Product list" 
                        link="/adminEditSection"
                    />
                </div>
                <div className="mainAdminContentRightSection">
                    <FeatureComponent 
                        title="Create New Product"
                        description="click to create New Product to be added to Product List" 
                        link="/productAdding"
                    />
                </div>
            </div>
        </div>
        <div className="footer">
              <Footer/>
        </div>
    </div>
  );
}
