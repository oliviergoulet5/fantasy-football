import './Filter.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';

const formatName = name => name.charAt(0).toUpperCase() + name.slice(1);

function Filter(props) {
    const name = formatName(props.name);

    let label = <p>{ name }</p>
    let filterRendering;

    switch(props.type) {
        case 'search':
            filterRendering = 
                <>
                { label }
                <SearchBar />
                </>;
            break;
        case 'dropdown':
            filterRendering = 
                <>
                { label }
                <DropdownMenu options={ props.options } />
                </>
            break;
        default:
            <p>Filter not found</p>
    }

    return (
        <div className='filter-group'>
            { filterRendering }
        </div>
    );
}

export default Filter;