import './DropdownMenu.scss';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useOutsideAlerter } from '../../hooks/outsideAlerter';

function DropdownMenu(props) {
    const [selectedOption, setSelectedOption] = useState('Any');
    const { visible, setVisible, ref } = useOutsideAlerter(false);

    const handleMenuClick = (event) => {
        if (visible === false) {
            setVisible(true);
        } else {
            setVisible(false);
        }

    }
    
    const handleOptionClick = (event) => {
        setVisible(false);
        let clickedOption = event.target.textContent;
        if (selectedOption !== clickedOption)
            setSelectedOption(event.target.textContent);
    }

    // For each passed down option we create a list item.
    let optionListItems = props.options.map(option => <li onClick={ handleOptionClick }>{option}</li>);

    let dropdownOptions =
    <div className={classNames('options', 'animate-open') }>
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