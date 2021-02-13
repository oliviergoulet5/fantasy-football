import mock_avi from '../../images/mock/avatar.png';
import { useOutsideAlerter } from '../../hooks/outsideAlerter';
import { Transition } from '@headlessui/react';
import { useMeQuery } from '../../generated/graphql';
import React from 'react';
import AvatarButton from './profileDropdown/AvatarButton';
import { Link } from 'react-router-dom';
import SigninButton from './profileDropdown/SigninButton';

function ProfileDropdown() {
    const { visible, setVisible, ref } = useOutsideAlerter(false);
    const { loading: fetchingAccount, data: accountData } = useMeQuery();
    const handleProfileButtonClick = () => setVisible(!visible);

    let accountStateRender: JSX.Element | undefined;

    if (fetchingAccount) {
        // greyed out icon?
    } else if (!accountData?.me) {
        accountStateRender = <SigninButton />
    } else {
        accountStateRender = (
            <>
                <p className='text-sm sm:flex hidden font-semibold mr-2'>{ accountData.me.name || accountData.me.username }</p>
                <AvatarButton
                    src={mock_avi}
                    onClick={handleProfileButtonClick}
                    sr="open profile menu"
                />
            </>
        );
    }

    return (
        <>
            {accountStateRender}
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
                    ref={ref}
                    className="ring-1 ring-black ring-opacity-5 absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                >
                    <Link to='/profile' className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700' role='menuItem'>
                        Profile
                    </Link>
                    <Link to='/settings' className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700' role='menuItem'>
                        Settings
                    </Link>
                    <Link to='/signout' className='hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700' role='menuItem'>
                        Sign Out
                    </Link>
                </div>
            </Transition>
        </>
    );
}

export default ProfileDropdown;
