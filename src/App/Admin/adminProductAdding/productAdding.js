import './productAdding.css'
import AdminHeader from '../adminHeader/adminHeader'
import imagePreview from '../../images/image-uploading-preview.svg'
import Footer from '../../Footer/Footer'
import { useState } from 'react'
export default function ProductAdding() {

      const [adminData, setAdminData] = useState({
            plantName: '',
            plantCategory: '',
            plantPrice: '',
            plantDescription: '',
            plantImage: '',
            plantImageForCard: '',
            plantSecondImage: '',
            plantThirdImage: ''
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setAdminData({
                  ...adminData,
                  [name]: value
            });
      };

      const handleImageChange = (e) => {
            const { name, files } = e.target;
            setAdminData({
                  ...adminData,
                  [name]: files[0]
            });
      };
      const handleFormSubmit = async (e) => {
            e.preventDefault();
            setAdminData({
                  plantName: '',
                  plantCategory: '',
                  plantPrice: '',
                  plantDescription: '',
                  plantImage: '',
                  plantImageForCard: '',
                  plantSecondImage: '',
                  plantThirdImage: ''
            });
      };

      return (
            <div className='admin-product-adding-page'>
                  <div className="product-adding-header">
                        <AdminHeader />
                  </div>
                  <form className="main-content-product-adding" onSubmit={handleFormSubmit}>
                        <div className="input-fields">
                              <span className='main-content-title'>Create New Product</span>
                              <label 
                                    htmlFor="plantName"
                                    >Enter the Plant Name
                              </label>
                              <input type="text" placeholder='Enter the Plant Name' name='plantName' className='product-adding-input-box' value={adminData.plantName} onChange={handleChange} />
                              <label htmlFor="plantPrice">Enter the Price</label>
                              <input type="text" placeholder='Enter the price' name='plantPrice' className='product-adding-input-box' value={adminData.plantPrice} onChange={handleChange} />
                              <label htmlFor="plantDescription">Enter the Plant's Description</label>
                              <textarea type="text" placeholder="Enter the Description" name='plantDescription' className='product-adding-input-box' value={adminData.plantDescription} onChange={handleChange} />
                              <label htmlFor="plant-name">Enter the Plant Category</label>
                              <select name="plantCategory" placeholder="Enter the Plant Category" className='product-adding-input-box' onChange={handleChange} value={adminData.plantCategory}>
                                    <option value="All Plants">All Plants</option>
                                    <option value="Outdoor Plants" selected>Outdoor Plants</option>
                                    <option value="Indoor Plants">Indoor Plants</option>
                                    <option value="Air Purifiers">Air Purifiers</option>
                                    <option value="Flowering Plants">Flowering Plants</option>
                                    <option value="Prosperity Plants">Prosperity Plants</option>
                              </select>
                        </div>
                        <span className='upload-pictures-text'>Upload Pictures</span>
                        <div className="image-upload-section">
                              <div className="file-access-parent-div">
                                    <label className="file-access-div">
                                          <input
                                                className="file-selector-input"
                                                type="file"
                                                name="plantImage"
                                                onChange={handleImageChange}
                                          />
                                          <img src={imagePreview} alt="" />
                                    </label>
                                    <span className="image-uploading-button-specifiers">Main Image</span>
                              </div>

                              <div className="file-access-parent-div">
                                    <label className="file-access-div">
                                          <input
                                                className="file-selector-input"
                                                type="file"
                                                name="plantImageForCard"
                                                onChange={handleImageChange}
                                          />
                                          <img src={imagePreview} alt="" />
                                    </label>
                                    <span className="image-uploading-button-specifiers">Image for Card</span>
                              </div>

                              <div className="file-access-parent-div">
                                    <label className="file-access-div">
                                          <input
                                                className="file-selector-input"
                                                type="file"
                                                name="plantSecondImage"
                                                onChange={handleImageChange}
                                          />
                                          <img src={imagePreview} alt="" />
                                    </label>
                                    <span className="image-uploading-button-specifiers">Second Image</span>
                              </div>

                              <div className="file-access-parent-div">
                                    <label className="file-access-div">
                                          <input
                                                className="file-selector-input"
                                                type="file"
                                                name="plantThirdImage"
                                                onChange={handleImageChange}
                                          />
                                          <img src={imagePreview} alt="" />
                                    </label>
                                    <span className="image-uploading-button-specifiers">Third Image</span>
                              </div>
                        </div>

                        <div className="product-adding-button-div">
                              <button className='product-adding-confirm-button' title='confirm'>confirm</button>
                        </div>
                  </form>
                  <div className="producting-adding-footer">
                        <Footer />
                  </div>
            </div>
      )
}