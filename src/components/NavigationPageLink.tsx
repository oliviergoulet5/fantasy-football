import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    page: string
    current: boolean
}

function NavigationPageLink({ page, current, children }: React.PropsWithChildren<Props>) {

    return (
        <div className='flex flex-col justify-center h-full'>
            <Link to={`/${page.toLowerCase()}`} className='py-2 m-auto'>
                <p className={ (current ? 'text-black ' : 'text-gray-600 ') + 'hover:bg-gray-50 hover:text-black font-semibold rounded-md text-sm px-3 py-2 m-auto flex items-center'}>
                    { page }
                    { children }
                </p>
            </Link>
            <span className={'h-0.5 w-10/12 flex place-self-center rounded-full' + (current && ' bg-blue-700')}></span>
        </div>
    )
}

export default NavigationPageLink;
//                     {/* add condition to render only if there is a live game currently; state store */}
