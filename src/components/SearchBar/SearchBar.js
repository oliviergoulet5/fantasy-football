import './SearchBar.scss';
import React, { useState } from 'react';

function SearchBar() {
    return (
        <div className='bar'>
            <img className='icon' src={process.env.PUBLIC_URL + '/icons/search.svg'} alt='search icon'/>
            <input></input>
        </div>
    );
}

export default SearchBar;