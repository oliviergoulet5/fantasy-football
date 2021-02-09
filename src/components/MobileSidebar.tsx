import { Transition } from '@headlessui/react';
import React from 'react';

type Props = {
    currentPage: string;
    pages: Array<string>;
    visible: boolean;
};

function MobileSidebar({ visible, pages, currentPage }: Props) {
    return (
        <aside className=" fixed h-screen w-3/5 overflow-hidden pointer-events-none">
            <Transition
                show={visible}
                enter="transition ease-in duration-150"
                enterFrom="transform -translate-x-full"
                enterTo="transform translate-x-0"
                leave="transition ease-out duration-150"
                leaveFrom="transform translate-x-0"
                leaveTo="transform -translate-x-full"
            >
                <div className="flex flex-col flex-none sm:hidden px-8 bg-gray-700 shadow-lg h-screen">
                    <h1 className="pt-12 font-bold text-xl text-white">
                        Fantasy Football Hub
                    </h1>
                    {pages.map(page => (
                        <>
                            <a
                                href="#"
                                className={
                                    (page === currentPage
                                        ? 'text-blue-300'
                                        : 'text-white ') +
                                    ' pt-12 font-semibold text-lg'
                                }
                            >
                                {page}
                            </a>
                            <hr className="shadow-lg opacity-10 -2/3" />
                        </>
                    ))}
                </div>
            </Transition>
        </aside>
    );
}

export default MobileSidebar;
