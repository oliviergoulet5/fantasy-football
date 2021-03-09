import React from 'react';
import ProfileInformation from './accountSettings/ProfileInformation';
import Sidebar from './accountSettings/Sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';


type Page = 'Profile information' | 'Account management' | 'Site preferences';

const pageComponents = new Map<Page, JSX.Element>([
    ['Profile information', <ProfileInformation />],
    ['Account management', <></>],
    ['Site preferences', <></>]
]);

const pageRoutes = new Map<Page, string>([
    ['Profile information', '/settings/profile-information'],
    ['Account management', '/settings/account-management'],
    ['Site preferences', '/settings/site-preferences']
]);

interface AccountSettingsProps {
    page: Page
}

function AccountSettings({ page }: AccountSettingsProps) {

    return (
        <div className='flex space-x-6'>
                <Sidebar pages={ pageRoutes } />
                <div className='fg-item w-full pb-4'>
                    { pageComponents.get(page) } 
                </div>
        </div>
    );
}

export default AccountSettings;