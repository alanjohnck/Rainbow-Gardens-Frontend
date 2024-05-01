import React from 'react';
import './SearchBar.css';
import searchIcon from '../images/SearchIcon.svg';

function SearchBar() {
  return (
    <div className='searchBarContainer'>
      <div className='inputContainer'>
        <input type='text' className='searchInput'></input>
        <div className='searchIconDiv'>
        <img src={searchIcon} alt='searchIcon'/>
        </div>
      </div>

      <div className='searchButtonDiv'>
        <button className='searchButton'>Search</button>
      </div>

      <div className='sortButtonDiv'>
        <button className='searchButton'>Sort</button>
      </div>
      
    </div>
  )
}

export default SearchBar