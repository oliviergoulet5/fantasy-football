import React from 'react';

interface SidebarProps<T> {
    pages: Array<T>,
    changePanel: React.Dispatch<T>
}

function Sidebar<T extends string>({ pages, changePanel }: SidebarProps<T>) {
    console.log(pages);
    return (
        <aside className='flex flex-col fg-item w-1/4 py-2 space-y-2'>
            <div className='mb-4 px-4'>
                <h1 className='font-bold text-2xl py-2'>Settings</h1>
                <hr />
            </div>
            { pages.map((page) => 
                <p 
                className='sidebar-option' 
                onClick={ () => { changePanel(page) }}>
                    { page }
                </p>
            )}
        </aside>
    )
}

export default Sidebar;