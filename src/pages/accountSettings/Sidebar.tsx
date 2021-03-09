import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps<T> {
    pages: Map<T, string>
}

function Sidebar<T extends string>({ pages }: SidebarProps<T>) {
    return (
        <aside className='flex flex-col fg-item w-1/4 py-2 space-y-2'>
            <div className='mb-4 px-4'>
                <h1 className='font-bold text-2xl py-2'>Settings</h1>
                <hr />
            </div>
            { Array.from(pages.keys()).map((page) => 
                <Link to={ pages.get(page)! } className='sidebar-option' >{page}</Link>
            )}
        </aside>
    )
}

export default Sidebar;