import './AdvancedBrowserFilters.scss';
import { useOutsideAlerter } from '../../hooks/outsideAlerter';
import React from 'react';

function AdvancedBrowserFilters() {
    const { visible, setVisible, ref } = useOutsideAlerter(false); // visibility state refers to modal window

    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setVisible(!visible);
      
    }

    // TODO: Align AdvancedBrowserFilters under the button. Absolute Position means float but is relative to parent relative. 
    let modal = 
    <div className='modal'>
    

    </div>

    return (
        <div className='wrapper' ref={ ref }>
            <span className='spacing'> </span>
            <div className='advanced-filters-btn' onClick={ handleButtonClick }>
                <img src={ process.env.PUBLIC_URL + '/icons/settings-alt.svg'} alt='Advanced Filters' />
            </div>
            { visible && modal }
        </div>
    )
}

export default AdvancedBrowserFilters;