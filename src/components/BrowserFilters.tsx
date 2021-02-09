import { ReactComponent as AdvancedFiltersIcon } from '../images/icons/settings-alt.svg';
import React, { useReducer } from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import { Transition } from '@headlessui/react';
import { useOutsideAlerter } from '../hooks/outsideAlerter';
import RangeSlider from './RangeSlider';
import { CLUBS, POSITIONS } from '../constants';
import { AcceptedFilterTypes } from '../types';

type Props = {
    dispatchFilters: (value: { filter: string; value: AcceptedFilterTypes }) => void;
};


function BrowserFilter({ dispatchFilters }: Props) {
    const { visible: advancedFiltersVisible, setVisible: setAdvancedFiltersVisible, ref } = useOutsideAlerter(false);
    
    const handleAdvancedFilterButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => setAdvancedFiltersVisible(!advancedFiltersVisible);

    const getDropdownValue = (value: string, name?: string) => {
        if (name) {
            dispatchFilters({ filter: name, value });
        }
    }

    const getSearchValue = (value: string) => {
        dispatchFilters({ filter: 'search', value })
    }

    const getRangeValue = (value: number[], name?: string) => {
        if (name) {
            dispatchFilters({ filter: name, value });
        }
    }

    return (
        <>
            <div className='flex p-20 pb-0 justify-center space-x-6 w-full items-end'>

                <div className='form-group'>
                    <p className='label'>Club</p>
                    <Dropdown name='clubs' options={ ['Any', ...CLUBS] } liftSelectedOptionUp={ getDropdownValue } />
                </div>

                <div className='form-group'>
                    <p className='label'>Position</p>
                    <Dropdown name='positions' options={['Any', ...POSITIONS] } liftSelectedOptionUp={ getDropdownValue } />
                </div>

                <div className="form-group">
                    <p className="label">Search</p>
                    <SearchBar liftSearchUp={ getSearchValue } />
                </div>

                <div className='fg-item flex justify-center h-8 w-8 hover:bg-gray-50  flex-none'>
                    <button onClick={ handleAdvancedFilterButtonClick } className='focus:outline-none'>
                        <AdvancedFiltersIcon />
                    </button>
                </div>
            </div>
            <Transition
                show={advancedFiltersVisible}
                enter={'ease-out duration-100'}
                enterFrom="transform opacity-0 -transition-y-full"
                enterTo="transform opacity-100 transition-y-0"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 transition-y-0"
                leaveTo="transform opacity-0 -transition-y-full"
            >
                <div
                    ref={ref}
                    className="fg-item absolute inline-block p-2 w-auto max-w-max m-auto min-w-1/2 origin-bottom mt-2 shadow-sm text-center left-0 right-0"
                >
                    <div className="relative inline-grid grid-cols-3 grid-rows-3 gap-2">
                        <div className="form-group">
                            <p className="label">Goals</p>
                            <RangeSlider name='goals' min={0} max={13} liftRangeUp={ getRangeValue } />
                        </div>
                        <div className="form-group">
                            <p className="label">Assists</p>
                            <RangeSlider name='assists' min={0} max={13} liftRangeUp={ getRangeValue } />
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    )
}

export default BrowserFilter;