import React, { useState } from 'react';
import ProfileInformation from './accountSettings/ProfileInformation';
import Sidebar from './accountSettings/Sidebar';

type Page = 'Profile information' | 'Account management' | 'Site preferences';

function AccountSettings() {
    const [ currentPanel, setCurrentPanel ] = useState<Page>('Profile information');

    const pages = new Map<Page, JSX.Element>([
        ['Profile information', <ProfileInformation />],
        ['Account management', <></>],
        ['Site preferences', <></>]
    ]);

    const panelComponent = pages.get(currentPanel);

    return (
        <div className='flex space-x-6'>
            <Sidebar pages={ Array.from(pages.keys()) } changePanel={ setCurrentPanel } />
            <div className='fg-item w-full pb-4'>
                { panelComponent || null }
            </div>
        </div>
    );
}

export default AccountSettings;