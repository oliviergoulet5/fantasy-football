import logo from '../images/logo.png';
import { ReactComponent as MenuIcon } from '../images/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../images/icons/close.svg';
import ProfileDropdown from './ProfileDropdown';
import React from 'react';

type Props = {
    currentPage?: string
}
function NavigationBar({ currentPage = 'Home' }: Props) {
    const pages = ['Home', 'Watchlist', 'Live Games'];
    
    return (
        <nav className='bg-white'>
            <div className='max-w-7x1 mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* Mobile Button */}
                        <button className='inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-inset' aria-aria-expanded='false'>
                            <span className='sr-only'>Open main menu</span>
                            {/* Icon when menu is closed: menu open will have 'hidden' and menu closed will be 'block*/}
                            <MenuIcon className='block h-6 w-6' />
                            <CloseIcon className='hidden h-6 w-6' /> { /*  Display either MenuIcon or CloseIcon depending on whether the menu is open */}
                        </button>
                    </div>

                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start h-full'>
                        { /* Logo */ }
                        <div className='flex-shrink-0 flex items-center'>
                            <img className='block lg:hidden h-8 w-auto' src={ logo } alt='fantasy football' />
                            <img className='hidden lg:block h-8 w-auto' src={ logo } alt='fantasy football' />
                        </div>

                        { /* Links */ }
                        <div className='hidden sm:block sm:ml-6'>
                            <div className='flex space-x-4 items-center content-center m-full h-full'>
                                { pages.map((page) => 
                                    <div className='flex flex-col justify-center h-full'>
                                        <a href='#' className={ (page === currentPage ? 'text-black ' : 'text-gray-600 ') + 'hover:bg-gray-50 hover:text-black font-semibold px-3 py-2 rounded-md text-sm m-auto'}>{ page }</a>
                                        <span className={'h-0.5 w-10/12 flex place-self-center rounded-full' + (page === currentPage && ' bg-blue-700')}></span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {/* Search */}
                    <div className='w-2/12 mr-6'>
                        <input type='text' name='search' placeholder='Search' className='border-gray-300 border focus:ring-blue-700 focus:border-blue-700 block w-full rounded-md sm:text-sm pl-7 pr-12 h-8 outline-none'></input>
                    </div>

                    <ProfileDropdown />

                </div>
            </div>

        </nav>
    )
}

export default NavigationBar;