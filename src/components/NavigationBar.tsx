import { ReactComponent as LiveIcon } from '../images/icons/live.svg';
import MobileSidebar from './navigationBar/MobileSidebar';
import ProfileDropdown from './navigationBar/ProfileDropdown';
import MobileMenuButton from './navigationBar/MobileMenuButton';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationPageLink from './navigationBar/NavigationPageLink';
import { MAIN_PAGES } from '../constants';
import NavigationSearchBar from './navigationBar/NavigationSearchBar';
import Logo from './navigationBar/Logo';
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
                            {/* Links */}
                            <div className="sm:block sm:ml-6 hidden">
                                <div className="m-full flex items-center content-center h-full space-x-4">
                                    {MAIN_PAGES.map(page => (
                                        <NavigationPageLink
                                            current={
                                                currentPage.toLowerCase() ===
                                                page.toLowerCase()
                                            }
                                            page={page}
                                        >
                                            {page === 'Games' && (
                                                <LiveIcon className="inline-block w-2 h-2 ml-2" />
                                            )}
                                        </NavigationPageLink>
                                    ))}
                                </div>
                            </div>
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
