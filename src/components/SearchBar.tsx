import { ReactComponent as SearchIcon } from '../images/icons/search.svg';
import React, { useEffect, useState } from 'react';

type Props = {
    placeholder?: string;
    liftSearchUp: (value: string) => void;
};

function SearchBar({ placeholder = '', liftSearchUp }: Props) {
    const [text, setText] = useState(placeholder);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    useEffect(() => {
        liftSearchUp(text);
    }, [text]);

    return (
        <div className="fg-item focus:ring-blue-700 focus:primary flex items-center flex-shrink-0 w-full h-8 mr-6 outline-none">
            <SearchIcon className="flex-none w-5 h-5 mx-1 text-black fill-current" />
            <input
                type="text"
                name="search"
                placeholder={placeholder}
                className="w-full outline-none"
                onChange={handleOnChange}
            ></input>
        </div>
    );
}

export default SearchBar;
