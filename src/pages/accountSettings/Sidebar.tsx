import React from 'react';

function Sidebar() {

    return (
        <aside className='flex flex-col fg-item w-1/5 py-2 space-y-2'>
            <div className='mb-4 px-4'>
                <h1 className='font-bold text-2xl py-2'>Settings</h1>
                <hr />
            </div>
           <p className='sidebar-option'>Profile information</p>
           <p className='sidebar-option'>Account management</p>
           <p className='sidebar-option'>Site preferences</p>
        </aside>
    )
}

export default Sidebar;