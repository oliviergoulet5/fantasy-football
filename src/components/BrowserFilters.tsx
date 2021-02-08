import { ReactComponent as AdvancedFiltersIcon } from '../images/icons/settings-alt.svg';
import React from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import { Transition } from '@headlessui/react';
import { useOutsideAlerter } from '../hooks/outsideAlerter';
import RangeSlider from './RangeSlider';

function BrowserFilter() {
    const { visible: advancedFiltersVisible, setVisible: setAdvancedFiltersVisible, ref } = useOutsideAlerter(false);
    
    const handleAdvancedFilterButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => setAdvancedFiltersVisible(!advancedFiltersVisible);

    const clubOptions = ['Any', 'Arsenal', 'Aston Villa', 'Brighton and Hove Albion', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Fulham', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United', 'Sheffield United', 'Southampton', 'Tottenham Hotspur', 'West Bromwich Albion', 'West Ham United', 'Wolverhampton Wanderers'];
    const positionOptions = ['Any', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];

    // State for active filters so we can set initial value to sliders upon re-render as well as get data for table

    return (
        <>
            <div className='flex p-20 pb-0 justify-center space-x-6 w-full items-end'>

                <div className='flex flex-col'>
                    <p className='label'>Club</p>
                    <Dropdown options={ clubOptions } />
                </div>

                <div className='flex flex-col'>
                    <p className='label'>Position</p>
                    <Dropdown options={ positionOptions } />
                </div>

                <div className='flex flex-col'>
                    <p className='label'>Search</p>
                    <SearchBar />
                </div>

                <div className='flex justify-center h-8 w-8 bg-white hover:bg-gray-50 rounded-md border-gray-300 border flex-none'>
                    <button onClick={ handleAdvancedFilterButtonClick } className='focus:outline-none'>
                        <AdvancedFiltersIcon />
                    </button>
                </div>
            </div>
            <Transition show={ advancedFiltersVisible } enter={'ease-out duration-100'} enterFrom='transform opacity-0 -transition-y-full' enterTo='transform opacity-100 transition-y-0' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 transition-y-0' leaveTo='transform opacity-0 -transition-y-full'>
                <div ref={ ref } className='absolute inline-block p-2 w-auto max-w-max m-auto min-w-1/2 origin-bottom mt-2 bg-white shadow-sm border-gray-300 border text-center left-0 right-0 rounded-md'>
                    <div className='relative inline-grid grid-cols-3 grid-rows-3 gap-2'>
                        <div>
                            <p className='label'>Goals</p>
                            <RangeSlider min={0} max={13} />
                        </div>
                        <div>
                            <p className='label'>Assists</p>
                            <RangeSlider min={0} max={13} />
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    )
}

export default BrowserFilter;