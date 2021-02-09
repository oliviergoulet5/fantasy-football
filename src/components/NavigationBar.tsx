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
                <div className="max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <MobileMenuButton
                                onClick={handleMobileMenuButtonClick}
                                mobileSidebarVisible={mobileSidebarVisible}
                            />
                        </div>

                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start h-full">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block lg:hidden h-8 w-auto"
                                    src={logo}
                                    alt="fantasy football"
                                />
                                <img
                                    className="hidden lg:block h-8 w-auto"
                                    src={logo}
                                    alt="fantasy football"
                                />
                            </div>

                            {/* Links */}
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4 items-center content-center m-full h-full">
                                    {pages.map(page => (
                                        <NavigationPageLink
                                            current={
                                                currentPage.toLowerCase() ===
                                                page.toLowerCase()
                                            }
                                            page={page}
                                        >
                                            {page === 'Games' && (
                                                <LiveIcon className="inline-block h-2 w-2 ml-2" />
                                            )}
                                        </NavigationPageLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="hidden sm:flex w-2/12 mr-6 border-gray-300 border focus:ring-blue-700 focus:border-blue-700 rounded-md pr-2 h-8 outline-none items-center flex-shrink-0">
                            <SearchIcon className="h-5 w-5 mx-1 fill-current text-gray-500 flex-none" />
                            <input
                                type="text"
                                name="search"
                                placeholder="Search"
                                className="sm:text-sm outline-none w-full"
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
