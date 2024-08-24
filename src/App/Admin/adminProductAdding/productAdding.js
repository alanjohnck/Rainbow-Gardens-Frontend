import './productAdding.css'
import AdminHeader from '../adminHeader/adminHeader'
import imagePreview from '../../images/image-uploading-preview.svg'
import Footer from '../../Footer/Footer'
import { useState } from 'react'
import axios from 'axios' // Make sure to install and import axios

export default function ProductAdding() {
  const [adminData, setAdminData] = useState({
    plantName: '',
    plantSmallDescription: '',
    plantPrice: '',
    plantLongDescription: '',
    plantDescriptionForCard: '',
    category: '',
  });

  const [images, setImages] = useState({
    plantImage: null,
    plantImageForCard: null,
    plantSecondImage: null,
    plantThirdImage: null
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
    setImages({
      ...images,
      [name]: files[0]
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    Object.keys(adminData).forEach(key => {
      formData.append(key, adminData[key]);
    });
    
    Object.keys(images).forEach(key => {
      if (images[key]) {
        formData.append('images', images[key]);
      }
    });

    try {
      const response = await axios.post('http://localhost:3001/api/createproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product created:', response.data);
      alert('Product created successfully!');
      // Reset form after successful submission
      setAdminData({
        plantName: '',
        plantSmallDescription: '',
        plantPrice: '',
        plantLongDescription: '',
        plantDescriptionForCard: '',
        category: '',
      });
      setImages({
        plantImage: null,
        plantImageForCard: null,
        plantSecondImage: null,
        plantThirdImage: null
      });
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product. Please try again.');
    }
  };

  return (
    <div className='admin-product-adding-page'>
      <div className="product-adding-header">
        <AdminHeader />
      </div>
      <form className="main-content-product-adding" onSubmit={handleFormSubmit}>
        <div className="input-fields">
          <span className='main-content-title'>Create New Product</span>
          <label htmlFor="plantName">Enter the Plant Name</label>
          <input type="text" placeholder='Enter the Plant Name' name='plantName' className='product-adding-input-box' value={adminData.plantName} onChange={handleChange} />
          <label htmlFor="plantPrice">Enter the Price</label>
          <input type="text" placeholder='Enter the price' name='plantPrice' className='product-adding-input-box' value={adminData.plantPrice} onChange={handleChange} />
          <label htmlFor="plantLongDescription">Enter the Plant's Description</label>
          <textarea placeholder="Enter the Description" name='plantLongDescription' className='product-adding-input-box' value={adminData.plantLongDescription} onChange={handleChange} />
          <label htmlFor="category">Enter the Plant Category</label>
          <select name="category" placeholder="Enter the Plant Category" className='product-adding-input-box' onChange={handleChange} value={adminData.category}>
            <option value="">Select a category</option>
            <option value="All Plants">All Plants</option>
            <option value="Outdoor Plants">Outdoor Plants</option>
            <option value="Indoor Plants">Indoor Plants</option>
            <option value="Air Purifiers">Air Purifiers</option>
            <option value="Flowering Plants">Flowering Plants</option>
            <option value="Prosperity Plants">Prosperity Plants</option>
          </select>
          <label htmlFor="plantSmallDescription">Enter Small Description</label>
          <input type="text" placeholder='Enter small description' name='plantSmallDescription' className='product-adding-input-box' value={adminData.plantSmallDescription} onChange={handleChange} />
          <label htmlFor="plantDescriptionForCard">Enter Description for Card</label>
          <input type="text" placeholder='Enter description for card' name='plantDescriptionForCard' className='product-adding-input-box' value={adminData.plantDescriptionForCard} onChange={handleChange} />
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
          <button type="submit" className='product-adding-confirm-button' title='confirm'>confirm</button>
        </div>
      </form>
      <div className="producting-adding-footer">
        <Footer />
      </div>
    </div>
  )
}