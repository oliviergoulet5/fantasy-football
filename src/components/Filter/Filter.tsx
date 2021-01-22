import './Filter.scss';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SearchBar from '../SearchBar/SearchBar';
import React from 'react';

const formatName = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

type Props = {
    name: string
    type: string
    options?: Array<string>
}

function Filter({ name, type, options }: Props) {
    let label = <p>{ formatName(name) }</p>
    let filterRendering;

    switch(type) {
        case 'search':
            filterRendering = 
                <>
                { label }
                <SearchBar />
                </>;
            break;
        case 'dropdown':
            if (options) {
                filterRendering = 
                <>
                { label }
                <DropdownMenu options={ options } />
                </>
            }

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