import React from 'react';
import { ReactComponent as MenuIcon } from '../images/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../images/icons/close.svg';

type Props = {
    onClick: () => void;
    mobileSidebarVisible: boolean;
};
function MobileMenuButton({ onClick, mobileSidebarVisible }: Props) {
    return (
        <button
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-inset"
            aria-aria-expanded="false"
        >
            <span className="sr-only">Open main menu</span>
            <MenuIcon
                onClick={onClick}
                className={
                    mobileSidebarVisible ? 'hidden' : 'block' + ' h-6 w-6'
                }
            />
            <CloseIcon
                onClick={onClick}
                className={
                    mobileSidebarVisible ? 'block' : 'hidden' + ' h-6 w-6'
                }
            />{' '}
            {/*  Display either MenuIcon or CloseIcon depending on whether the menu is open */}
        </button>
    );
}

export default MobileMenuButton;
