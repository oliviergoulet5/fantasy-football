import logo from '../images/logo.png';
import { ReactComponent as SearchIcon } from '../images/icons/search.svg';
import { ReactComponent as LiveIcon } from '../images/icons/live.svg';
import MobileSidebar from './MobileSidebar';
import ProfileDropdown from './ProfileDropdown';
import MobileMenuButton from './MobileMenuButton';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationPageLink from './NavigationPageLink';

type Props = {
    pages: Array<string>;
    currentPage?: string;
};

function NavigationBar({ pages }: Props) {
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
                            {/* Logo */}
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

                            {/* Links */}
                            <div className="sm:block sm:ml-6 hidden">
                                <div className="m-full flex items-center content-center h-full space-x-4">
                                    {pages.map(page => (
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

                        {/* Search */}
                        <div className="sm:flex focus:ring-blue-700 focus:border-blue-700 items-center flex-shrink-0 hidden w-2/12 h-8 pr-2 mr-6 border border-gray-300 rounded-md outline-none">
                            <SearchIcon className="flex-none w-5 h-5 mx-1 text-gray-500 fill-current" />
                            <input
                                type="text"
                                name="search"
                                placeholder="Search"
                                className="sm:text-sm w-full outline-none"
                            ></input>
                        </div>

                        <ProfileDropdown />
                    </div>
                </div>
            </nav>

            <MobileSidebar
                currentPage={currentPage}
                pages={pages}
                visible={mobileSidebarVisible}
            />
        </>
    );
}

export default NavigationBar;
