import { ReactComponent as SearchIcon } from '../images/icons/search.svg';
import React from 'react';

type Props = {
    placeholder?: string
}


function SearchBar({ placeholder = '' }: Props) {
    return (
        <div className='flex w-full mr-6 bg-white border-gray-300 border focus:ring-blue-700 focus:border-blue-700 rounded-md outline-none h-8 items-center flex-shrink-0'>
            <SearchIcon className='h-5 w-5 mx-1 fill-current text-black flex-none' />
            <input type='text' name='search' placeholder={ placeholder } className='outline-none w-full'></input>
        </div>
    )
}

export default SearchBar;