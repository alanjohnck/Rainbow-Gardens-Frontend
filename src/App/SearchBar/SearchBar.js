import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from '../images/SearchIcon.svg';

function SearchBar({sendDataToParent}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    sendDataToParent(searchQuery);
  };

  const handleFocus = () => {
    // Implement focus functionality here
    console.log('Input field focused');
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
        <img src={searchIcon} alt='searchIcon' />
      </div>

      <div className='searchButtonDiv'>
        <button className='searchButton' onClick={handleSearch}>Search</button>
      </div>

      <div className='sortButtonDiv'>
        <button className='searchButton'>Sort</button>
      </div>
    </div>
  );
}

export default SearchBar;
