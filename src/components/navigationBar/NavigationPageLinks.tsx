import React from 'react';
import { useLocation } from 'react-router-dom';
import { MAIN_PAGES } from '../../constants';
import NavigationPageLink from './navigationPageLinks/PageLink';
import { ReactComponent as LiveIcon } from '../../images/icons/live.svg';

function NavigationPageLinks() {
    const currentPage = useLocation().pathname.substring(1);

    return (
        <div className="sm:block sm:ml-6 hidden">
            <div className="m-full flex items-center content-center h-full space-x-4">
                {MAIN_PAGES.map(page => (
                    <NavigationPageLink
                        current={
                            currentPage.toLowerCase() === page.toLowerCase()
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
    );
}

export default NavigationPageLinks;
