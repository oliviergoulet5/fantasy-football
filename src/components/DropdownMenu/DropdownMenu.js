import './DropdownMenu.scss';
import classNames from 'classnames';
import { useOutsideAlerter } from '../../hooks/outsideAlerter';
import React, { useState } from 'react';

function DropdownMenu({ options = ['Default'] }) {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const { visible, setVisible, ref } = useOutsideAlerter(false);

    const handleMenuClick = () => {
        setVisible(!visible);
    }
    
    const handleOptionClick = (event) => {
        setVisible(false);
        let clickedOption = event.target.textContent;
        if (selectedOption !== clickedOption)
            setSelectedOption(event.target.textContent);
    }

    // For each passed down option we create a list item. A checkmark is added to the currently selected item.
    let checkmark = <img src={ process.env.PUBLIC_URL + '/icons/check.svg'} alt='selected'/>;
    let optionListItems = options.map(option => {
        return (
            <li key={option} onClick={ handleOptionClick }>
                {option}
                { option === selectedOption && checkmark }
            </li>
        );
    });

    let dropdownOptions =
    <div key='dropdownOptions' className={classNames('options', 'animate-open') }>
        { optionListItems }
    </div>;

    return (
        <div className='dropdown-wrapper' onClick={ handleMenuClick } ref={ ref }>
            <ul className='dropdown'>
                <li className='selected'>
                    { selectedOption }
                    <img className='icon' src={process.env.PUBLIC_URL + '/icons/chevron-down.svg'} alt='icon'/>
                </li>
                { visible && dropdownOptions }
            </ul>
        </div>
    )
}

export default DropdownMenu;