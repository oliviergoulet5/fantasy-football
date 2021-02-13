import MobileSidebar from './navigationBar/MobileSidebar';
import ProfileDropdown from './navigationBar/ProfileDropdown';
import MobileMenuButton from './navigationBar/MobileMenuButton';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationSearchBar from './navigationBar/NavigationSearchBar';
import Logo from './navigationBar/Logo';
import NavigationPageLinks from './navigationBar/NavigationPageLinks';

function NavigationBar() {
    const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);
    const currentPage = useLocation().pathname.substring(1);

    const handleMobileMenuButtonClick = () =>
        setMobileSidebarVisible(!mobileSidebarVisible);

    return (
        <>
            <nav className="bg-white shadow-sm">
                <div className="max-w-7x1 sm:px-6 lg:px-8 px-2 mx-auto">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="sm:hidden absolute inset-y-0 left-0 flex items-center">
                            <MobileMenuButton
                                onClick={handleMobileMenuButtonClick}
                                mobileSidebarVisible={mobileSidebarVisible}
                            />
                        </div>

                        <div className="sm:items-stretch sm:justify-start flex items-center justify-center flex-1 h-full">
                            <Logo />
                            <NavigationPageLinks />
                        </div>
                        <NavigationSearchBar />
                        <ProfileDropdown />
                    </div>
                </div>
            </nav>

            <MobileSidebar
                currentPage={currentPage}
                visible={mobileSidebarVisible}
            />
        </>
    );
}

export default NavigationBar;
