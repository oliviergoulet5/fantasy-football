import { ReactComponent as AdvancedFiltersIcon } from '../images/icons/settings-alt.svg';
import React, { useReducer } from 'react';
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

    return (
        <>
            <div className='flex p-20 pb-0 justify-center space-x-6 w-full items-end'>

                <div className='form-group'>
                    <p className='label'>Club</p>
                    <Dropdown options={ clubOptions } />
                </div>

                <div className='form-group'>
                    <p className='label'>Position</p>
                    <Dropdown options={ positionOptions } />
                </div>

                <div className='form-group'>
                    <p className='label'>Search</p>
                    <SearchBar />
                </div>

                <div className='fg-item flex justify-center h-8 w-8 hover:bg-gray-50  flex-none'>
                    <button onClick={ handleAdvancedFilterButtonClick } className='focus:outline-none'>
                        <AdvancedFiltersIcon />
                    </button>
                </div>
            </div>
            <Transition show={ advancedFiltersVisible } enter={'ease-out duration-100'} enterFrom='transform opacity-0 -transition-y-full' enterTo='transform opacity-100 transition-y-0' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 transition-y-0' leaveTo='transform opacity-0 -transition-y-full'>
                <div ref={ ref } className='fg-item absolute inline-block p-2 w-auto max-w-max m-auto min-w-1/2 origin-bottom mt-2 shadow-sm text-center left-0 right-0'>
                    <div className='relative inline-grid grid-cols-3 grid-rows-3 gap-2'>
                        <div className='form-group'>
                            <p className='label'>Goals</p>
                            <RangeSlider min={0} max={13} />
                        </div>
                        <div className='form-group'>
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