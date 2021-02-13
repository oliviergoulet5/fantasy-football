import React from 'react';
import logo from '../../images/logo.png';

function Logo() {

    return (
        <div className="flex items-center flex-shrink-0">
            <img
                className="lg:hidden block w-auto h-8"
                src={logo}
                alt="fantasy football"
            />
            <img
                className="lg:block hidden w-auto h-8"
                src={logo}
                alt="fantasy football"
            />
        </div>
    )
}

export default Logo;