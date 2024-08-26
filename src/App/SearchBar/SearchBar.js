import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from '../images/SearchIcon.svg';

function SearchBar({sendDataToParent}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    sendDataToParent(searchQuery);
  };

  const handleFocus = () => {
    // Implement focus functionality here
    console.log('Input field focused');
  };

  const handleSort = (criteria) => {
    // Implement sort functionality here
    console.log(`Sorting by: ${criteria}`);
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <div className='searchBarContainer'>
      <div className='inputContainer'>
        <input
          type='text'
          className='searchInput'
          autoComplete='on'
          value={searchQuery}
          autoFocus
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <img src={searchIcon} alt='searchIcon' onClick={handleSearch} />
      </div>

      <div className='searchButtonDiv'>
        <button className='searchButton' onClick={handleSearch}>Search</button>
      </div>

      <div className='sortButtonDiv'>
        <button 
          className='searchButton' 
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Sort
        </button>
        {showDropdown && (
          <div className='dropdownMenu'>
            <div className='dropdownItem' onClick={() => handleSort('price')}>Price</div>
            <div className='dropdownItem' onClick={() => handleSort('category')}>Category</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
