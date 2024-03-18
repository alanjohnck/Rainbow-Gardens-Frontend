import React from 'react';
import './SearchBar.css';
import searchIcon from '../images/SearchIcon.svg';

function SearchBar() {
  return (
    <div className='searchBarContainer'>
       <input type='text' className='searchBar'/>
       <img src={searchIcon} alt='searchIcon' className='searchIcon'/>
       
       <div className='searchButtonContainer'>
         <button className='searchButton'>
           Search
         </button>
       </div>

       <div className='sortButtonContainer'>
         <button className='searchButton'>
           Sort
         </button>
       </div>
    </div>
  )
}

export default SearchBar