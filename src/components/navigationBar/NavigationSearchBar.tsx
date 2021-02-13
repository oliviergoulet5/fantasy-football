import React from 'react';
import { ReactComponent as SearchIcon } from '../../images/icons/search.svg';
function NavigationSearchBar() {
    return (
        <div className="sm:flex focus:ring-blue-700 focus:border-blue-700 items-center flex-shrink-0 hidden w-2/12 h-8 pr-2 mr-6 border border-gray-300 rounded-md outline-none">
        <SearchIcon className="flex-none w-5 h-5 mx-1 text-gray-500 fill-current" />
        <input
                type="text"
                name="search"
                placeholder="Search"
                className="sm:text-sm w-full outline-none"
            ></input>
        </div>

    )
}

export default NavigationSearchBar;