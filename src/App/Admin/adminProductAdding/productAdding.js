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
            <div className='adminProductAddingPage'>
                  <div className="productAddingHeader">
                        <AdminHeader />
                  </div>
                  <form 
                        className="mainContentProductAdding" 
                        onSubmit={handleFormSubmit}
                  >
                        <div className="inputFields">
                              <span className='mainContentTitle'>
                                    Create New Product
                              </span>
                              <label htmlFor="plantName">
                                    Enter the Plant Name
                              </label>
                              <input 
                                    type="text" 
                                    placeholder="Enter the Plant Name" 
                                    name="plantName" 
                                    className="productAddingInputBox" 
                                    value={adminData.plantName} 
                                    onChange={handleChange} 
                                    required
                              />
                              <label htmlFor="plantPrice">
                                    Enter the Price
                              </label>
                              <input 
                                    type="text" 
                                    placeholder="Enter the price" 
                                    name="plantPrice" 
                                    className="productAddingInputBox" 
                                    value={adminData.plantPrice} 
                                    onChange={handleChange} 
                                    required
                              />
                              <label htmlFor="plantDescription">
                                    Enter the Plant's Description
                              </label>
                              <textarea 
                                    type="text" 
                                    placeholder="Enter the Description" 
                                    name="plantDescription" 
                                    className="productAddingInputBox" 
                                    value={adminData.plantDescription} 
                                    onChange={handleChange} 
                                    required
                              />
                              <label htmlFor="plantCategory">
                                    Enter the Plant Category
                              </label>
                              <select 
                                    name="plantCategory" 
                                    placeholder="Enter the Plant Category" 
                                    className="productAddingInputBox" 
                                    onChange={handleChange} 
                                    value={adminData.plantCategory} 
                                    required
                              >
                                    <option value="All Plants">
                                          All Plants
                                    </option>
                                    <option value="Outdoor Plants" selected>
                                          Outdoor Plants
                                    </option>
                                    <option value="Indoor Plants">
                                          Indoor Plants
                                    </option>
                                    <option value="Air Purifiers">
                                          Air Purifiers
                                    </option>
                                    <option value="Flowering Plants">
                                          Flowering Plants
                                    </option>
                                    <option value="Prosperity Plants">
                                          Prosperity Plants
                                    </option>
                              </select>
                        </div>
                        <span className='uploadPicturesText'>
                              Upload Pictures
                        </span>
                        <div className="imageUploadSection">
                              <div className="fileAccessParentDiv">
                                    <label className="fileAccessDiv">
                                          <input
                                                className="fileSelectorInput"
                                                type="file"
                                                name="plantImage"
                                                onChange={handleImageChange}
                                                required
                                          />
                                          <img src={imagePreview} alt="" />
                                    </label>
                                    <span className="imageUploadingButtonSpecifiers">
                                          Main Image
                                    </span>
                              </div>

                              <div className="fileAccessParentDiv">
                                    <label className="fileAccessDiv">
                                          <input
                                                className="fileSelectorInput"
                                                type="file"
                                                name="plantImageForCard"
                                                onChange={handleImageChange}
                                                required
                                          />
                                          <img src={imagePreview} alt="" />
                                    </label>
                                    <span className="imageUploadingButtonSpecifiers">
                                          Image for Card
                                    </span>
                              </div>

                              <div className="fileAccessParentDiv">
                                    <label className="fileAccessDiv">
                                          <input
                                                className="fileSelectorInput"
                                                type="file"
                                                name="plantSecondImage"
                                                onChange={handleImageChange}
                                                required
                                          />
                                          <img src={imagePreview} alt="" />
                                    </label>
                                    <span className="imageUploadingButtonSpecifiers">
                                          Second Image
                                    </span>
                              </div>

                              <div className="fileAccessParentDiv">
                                    <label className="fileAccessDiv">
                                          <input
                                                className="fileSelectorInput"
                                                type="file"
                                                name="plantThirdImage"
                                                onChange={handleImageChange}
                                                required
                                          />
                                          <img src={imagePreview} alt="" />
                                    </label>
                                    <span className="imageUploadingButtonSpecifiers">
                                          Third Image
                                    </span>
                              </div>
                        </div>

                        <div className="productAddingButtonDiv">
                              <button 
                                    className='productAddingConfirmButton' 
                                    title='confirm'
                              >
                                    confirm
                              </button>
                        </div>
                  </form>
                  <div className="productAddingFooter">
                        <Footer />
                  </div>
            </div>
      )
}
