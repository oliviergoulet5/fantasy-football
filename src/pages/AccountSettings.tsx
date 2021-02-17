import React from 'react';
import ProfileInformation from './accountSettings/ProfileInformation';
import Sidebar from './accountSettings/Sidebar';
function AccountSettings() {
    let currentPanel = <ProfileInformation />
    return (
        <div className='flex space-x-6'>
            <Sidebar />
            <div className='fg-item w-full'>
                { currentPanel }
            </div>
        </div>
    )
}

export default AccountSettings;