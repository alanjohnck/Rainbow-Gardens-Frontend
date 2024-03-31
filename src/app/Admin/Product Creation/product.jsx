import React, { useState } from 'react';
import "./product.css"

function Product() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select Category'); // Added state for selected item
    const toggleDropdown = () => setIsOpen(!isOpen);
    const [price, setPrice] = useState('');
  
    // Function to handle item selection
    const handleSelect = (name) => {
      setSelected(name);
      setIsOpen(false); // Close the dropdown after selection
    };

    const handlePriceChange = (event) => {
      let inputValue = event.target.value;
      inputValue = inputValue.replace(/\D/g, '');

      // Ensure ₹ symbol appears first
      if (!inputValue.startsWith('₹')) {
          inputValue = '₹' + inputValue;
      }

      setPrice(inputValue);
  };
    

  return (
    <div className='product-create-main'>
      <div className="product-nav"></div>
      <div className="product-class-1">
        <h1>Add New Plant</h1>
        <span>Enter Plant Name</span>
        <input type='text' />
        <br />
        <span>Enter Plant Small Description</span>
        <input type='text' />
        <br />
        <span>Enter Plant Price</span>
        <input type='text' value={price} onChange={handlePriceChange} />
        <br />
        <span>Enter Plant Long Description</span>
        <input type='text' />
        <br />
        <span>Enter Plant Description for Cards</span>
        <input type='text' />
        <br />

        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            {selected} {/* Updated to show selected item */}
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <a onClick={() => handleSelect('Outdoor Plant')} >Outdoor Plant</a>
              <a onClick={() => handleSelect('Indoor Plant')} >Indoor Plant</a>
              <a onClick={() => handleSelect('Prosperity Plants')}>Money Plant</a>
              <a onClick={() => handleSelect('Air Purifier Plants')} >Money Plant</a>
              <a onClick={() => handleSelect('Flowering Plants')} >Money Plant</a>
            </div>
          )}
        </div>
        <br />
        <br />
        <div className="image-wrap-class">
          <div className="image-class">
          <h2>Image for Card</h2>
            <input type="file" id="image-input" className="image-input" />
          </div>
          <br />
          <br />
          <div className="image-class">
          <h2>Image for Product 1</h2>
            <input type="file" id="image-input" className="image-input" />
          </div>
          <br />
          <br />
          <div className="image-class">
          <h2>Image for Product 2</h2>
            <input type="file" id="image-input" className="image-input" />
          </div>
          <br />
          <br />
          <div className="image-class">
          <h2>Image for Product 3</h2>
            <input type="file" id="image-input" className="image-input" />
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />
        <div className="buttonclx">
        <button className="submit-button-admin">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Product