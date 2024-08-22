import React from 'react'
import './productAdding.css'
import AdminHeader from '../adminHeader'
import imagePreview from '../images/image-uploading-preview.svg'
import Footer from '../../Footer/Footer'
export default function ProductAdding() {
      
  return (
    <div className='admin-product-adding-page'>
            <div className="product-adding-header">
                 <AdminHeader/>
            </div>
            <div className="main-content-product-adding">
                  <div className="input-fields">
                        <span className='main-content-title'>Create New Product</span>
                        <label htmlFor="plant-name">Enter the Plant Name</label>
                        <input type="text" placeholder='Enter the Plant Name' name='plant-name' className='product-adding-input-box'/>
                        <label htmlFor="plant-name">Enter the Plant Name</label>
                        <input type="text" placeholder='Enter the Plant Name' name='plant-name' className='product-adding-input-box'/>
                        <label htmlFor="plant-name">Enter the Plant Name</label>
                        <input type="text" placeholder='Enter the Plant Name' name='plant-name' className='product-adding-input-box'/>
                        <label htmlFor="plant-name">Enter the Plant Name</label>
                        <input type="text" placeholder='Enter the Plant Name' name='plant-name' className='product-adding-input-box'/>
                        <label htmlFor="plant-name">Enter the Plant Name</label>    
                        <select name="plant-name" placeholder="Enter the Plant Name" className='product-adding-input-box'>
                              <option value=""></option>
                              <option value=""></option>
                              <option value=""></option>
                              <option value=""></option>
                        </select>
                  </div>
                  <span className='upload-pictures-text'>Upload Pictures</span>
                  <div className="image-upload-section">
                        <div className="file-access-parent-div">
                              <label className="file-access-div">
                                    <input className="file-selector-input" type='file'/>
                                    <img src={imagePreview} alt="" />
                              </label>
                              <span className='image-uploading-button-specifiers'>Main Image</span>
                        </div>

                        <div className="file-access-parent-div">
                              <label className="file-access-div">
                                    <input className="file-selector-input" type='file'/><img src={imagePreview} alt="" />
                              </label>
                              <span className='image-uploading-button-specifiers'>Image for Card</span>
                        </div>

                        <div className="file-access-parent-div">
                              <label className="file-access-div">
                                    <input className="file-selector-input" type='file'/><img src={imagePreview} alt="" />      
                              </label>
                              <span className='image-uploading-button-specifiers'>Second Image</span>
                        </div>

                        <div className="file-access-parent-div">
                              <label className="file-access-div">
                                    <input className="file-selector-input" type='file'/><img src={imagePreview} alt="" />
                              </label>
                              <span className='image-uploading-button-specifiers'>Third Image</span>
                        </div>
                  </div>
                  <button className='product-adding-confirm-button'>confirm</button>
            </div>
            <div className="producting-adding-footer">
                  <Footer/>
            </div>
    </div>
  )
}