import React, { useState } from 'react';
import { ReactComponent as ChevronDownIcon } from '../images/icons/chevron-down.svg';
import { useOutsideAlerter } from '../hooks/outsideAlerter';
import { Transition } from '@headlessui/react';

type Props = {
    options: Array<string>
}

function Dropdown({ options }: Props) {
    const [ selectedOption, setSelectedOption ] = useState(options[0] || 'No Options');
    const { visible: menuVisible, setVisible: setMenuVisible, ref } = useOutsideAlerter(false);

    const handleMenuClick = () => setMenuVisible(!menuVisible);

    const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
        let clickedOption = (event.target as HTMLElement).textContent;
        
        if (clickedOption && selectedOption !== clickedOption) {
            setSelectedOption(clickedOption)
        }

        setMenuVisible(false);
    }

    return (
        <div>
            <div className='flex items-center justify-items-center flex-row-reverse h-8 w-60 bg-white border-gray-300 border focus:ring-blue-700 focus:border-blue-700 rounded-md' onClick={ handleMenuClick } ref={ ref }>
                <ChevronDownIcon className='justify-self-end w-6 h-6 mx-1 mt-1'/>
                <p className='text-center justify-self-stretch px-2 w-full select-none'>{ selectedOption }</p>
            </div>
            <Transition show={ menuVisible } enter={'ease-out duration-100'} enterFrom='transform opacity-0 -transition-y-full' enterTo='transform opacity-100 transition-y-0' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 transition-y-0' leaveTo='transform opacity-0 -transition-y-full'>
                <ul className='absolute origin-bottom mt-2 w-60 text-center shadow-md bg-white rounded-md border-gray-300 border first:rounded-md last:rounded-md'>
                    { options.map((option) => <li key={ option } onClick={ handleOptionClick } className='block select-none px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700'>{ option }</li>) }
                </ul>
            </Transition>
        </div>
    )
}

export default Dropdown;