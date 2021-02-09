import { ReactComponent as SearchIcon } from '../images/icons/search.svg';
import React, { useEffect, useState } from 'react';

type Props = {
    liftSearchUp: (value: string) => void;
    placeholder?: string;
    onKeyDown?: React.KeyboardEventHandler;
};

function SearchBar({ placeholder = '', liftSearchUp }: Props) {
    const [text, setText] = useState(placeholder);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    useEffect(() => {
        liftSearchUp(text);
    }, [text]);

    return (
        <div className="flex w-full mr-6 fg-item focus:ring-blue-700 focus:primary outline-none h-8 items-center flex-shrink-0">
            <SearchIcon className="h-5 w-5 mx-1 fill-current text-black flex-none" />
            <input
                type="text"
                name="search"
                placeholder={placeholder}
                className="outline-none w-full"
                onChange={ handleOnChange }
            ></input>
        </div>
    )
}

export default SearchBar;