import mock_avi from '../images/mock/avatar.png';
import { useOutsideAlerter } from '../hooks/outsideAlerter';
import { Transition } from '@headlessui/react';
import React from 'react';

function ProfileDropdown() {
    const options = ['Your profile', 'Settings', 'Sign out'];
    const { visible, setVisible, ref } = useOutsideAlerter(false);
    const handleProfileButtonOnClick = () => setVisible(!visible);

    return(
        <>
            <div ref={ ref } className='m1-3 relative'>
                <div>
                    <button onClick={ handleProfileButtonOnClick } className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white' id='user-menu' aria-haspopup='true'>
                        <span className='sr-only'>Open user menu</span>
                        <img className='h-8 w-8 rounded-full' src={ mock_avi } alt='' />
                    </button>
                </div>
            </div>
            <Transition show={ visible } enter={'ease-out duration-100'} enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
                <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
                    { options.map(option => <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' role='menuItem'>{ option }</a>) }
                </div> 
            </Transition>
        </>
    )
}

export default ProfileDropdown;