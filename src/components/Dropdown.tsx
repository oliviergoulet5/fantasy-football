import { Transition } from '@headlessui/react';
import React, { useEffect, useState, useRef, forwardRef } from 'react';

type Props = {
    options: Array<string>,
    visible: boolean
}

const Dropdown = React.forwardRef<HTMLDivElement, Props>(({ options, visible }, ref) => {
    return (
        <Transition show={ visible } enter={'ease-out duration-100'} enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
            <div ref={ ref } className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
                { options.map(option => <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuItem'>{ option }</a>) }
            </div> 
        </Transition>
    );
})

export default Dropdown;