import mock_avi from '../../images/mock/avatar.png';
import { useOutsideAlerter } from '../../hooks/outsideAlerter';
import { Transition } from '@headlessui/react';
import React from 'react';

function ProfileDropdown() {
    const options = ['Your profile', 'Settings', 'Sign out'];
    const { visible, setVisible, ref } = useOutsideAlerter(false);
    const handleProfileButtonOnClick = () => setVisible(!visible);

    return (
        <>
            <div ref={ref} className="m1-3 relative">
                <div>
                    <button
                        onClick={handleProfileButtonOnClick}
                        className="focus:outline-none focus:ring focus:ring-offset-blue-700 focus:ring-blue-700 flex text-sm bg-gray-800 rounded-full outline-none"
                        id="user-menu"
                        aria-haspopup="true"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img
                            className="w-8 h-8 rounded-full"
                            src={mock_avi}
                            alt=""
                        />
                    </button>
                </div>
            </div>
            <Transition
                show={visible}
                enter={'ease-out duration-100'}
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div
                    className="ring-1 ring-black ring-opacity-5 absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                >
                    {options.map(option => (
                        <a
                            href="#"
                            className="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                            role="menuItem"
                        >
                            {option}
                        </a>
                    ))}
                </div>
            </Transition>
        </>
    );
}

export default ProfileDropdown;
