import React, { useState } from 'react';
import axios from 'axios';
import "./product.css";
import Swal from 'sweetalert2';

function Product() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select Category');
    const [formData, setFormData] = useState({
        plantName: '',
        plantSmallDescription: '',
        plantLongDescription: '',
        plantDescriptionForCard: '',
        category: '', // Add category state
        plantPrice: '', // Add price state
    });
    const [images, setImages] = useState([]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (name) => {
        setSelected(name);
        setFormData({ ...formData, category: name }); // Update category state
        setIsOpen(false);
    };

    const handlePriceChange = (event) => {
        const inputValue = event.target.value;
        let formattedValue = inputValue.replace(/[^\d]/g, ''); // Remove non-digit characters
    
        // Add '₹' if it's not already present at the beginning
        if (!formattedValue.startsWith('₹')) {
            formattedValue = '₹' + formattedValue;
        }
    
        setFormData({ ...formData, plantPrice: formattedValue }); // Update plantPrice state
    };

    const handleFileChange = (event, index) => {
        const newImages = [...images];
        newImages[index] = event.target.files[0];
        setImages(newImages);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const formDataWithImages = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataWithImages.append(key, value);
            });
    
            images.forEach((image, index) => {
                formDataWithImages.append(`image${index}`, image); // Append the image files to FormData
            });
    
            const response = await axios.post('http://localhost:3001/api/createproduct', formDataWithImages, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            // Display success message using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'New Plant has been added successfully',
            });
    
            console.log(response.data);
            // Reset form data and state after successful submission if needed
        } catch (error) {
            console.error('Error creating product:', error);
            // Display error message using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to create product',
            });
            // Handle error
        }
    };

    return (
        <div className='product-create-main'>
            <div className="product-nav"></div>
            <div className="product-class-1">
                <h1>Add New Plant</h1>
                <span>Enter Plant Name</span>
                <input type='text' name="plantName" value={formData.plantName} onChange={handleInputChange} />
                <br />
                <span>Enter Plant Small Description</span>
                <input type='text' name="plantSmallDescription" value={formData.plantSmallDescription} onChange={handleInputChange} />
                <br />
                <span>Enter Plant Price</span>
                <input type='text' value={formData.plantPrice} onChange={handlePriceChange} />
                <br />
                <span>Enter Plant Long Description</span>
                <input type='text' name="plantLongDescription" value={formData.plantLongDescription} onChange={handleInputChange} />
                <br />
                <span>Enter Plant Description for Cards</span>
                <input type='text' name="plantDescriptionForCard" value={formData.plantDescriptionForCard} onChange={handleInputChange} />
                <br />

                <div className="dropdown">
                    <button onClick={toggleDropdown} className="dropbtn">
                        {selected}
                    </button>
                    {isOpen && (
                        <div className="dropdown-content">
                            <a onClick={() => handleSelect('Outdoor Plant')}>Outdoor Plant</a>
                            <a onClick={() => handleSelect('Indoor Plant')}>Indoor Plant</a>
                            <a onClick={() => handleSelect('Prosperity Plants')}>Prosperity Plants</a>
                            <a onClick={() => handleSelect('Air Purifier Plants')}>Air Purifier Plants</a>
                            <a onClick={() => handleSelect('Flowering Plants')}>Flowering Plants</a>
                        </div>
                    )}
                </div>
                <br />
                <br />
                <div className="image-wrap-class">
                    <div className="image-class">
                        <h2>Image for Card</h2>
                        <input type="file" onChange={(event) => handleFileChange(event, 0)} className="image-input" />
                    </div>
                    <div className="image-class">
                        <h2>Image for Product 1</h2>
                        <input type="file" onChange={(event) => handleFileChange(event, 1)} className="image-input" />
                    </div>
                    <div className="image-class">
                        <h2>Image for Product 2</h2>
                        <input type="file" onChange={(event) => handleFileChange(event, 2)} className="image-input" />
                    </div>
                    <div className="image-class">
                        <h2>Image for Product 3</h2>
                        <input type="file" onChange={(event) => handleFileChange(event, 3)} className="image-input" />
                    </div>
                </div>
                <br />
                <br />
                <div className="buttonclx">
                    <button className="submit-button-admin" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
