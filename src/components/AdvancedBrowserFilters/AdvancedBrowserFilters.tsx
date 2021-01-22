import './AdvancedBrowserFilters.scss';
import { useOutsideAlerter } from '../../hooks/outsideAlerter';
import React from 'react';

type Props = {};

function AdvancedBrowserFilters({ children }: React.PropsWithChildren<Props>) {
    const { visible: modalVisible, setVisible: setModalVisible, ref } = useOutsideAlerter(false); // visibility state refers to modal window

    const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => setModalVisible(!modalVisible);

    let modal = <div className='modal'>{ children }</div>

    return (
        <div className='wrapper' ref={ ref }>
            <span className='spacing'> </span>
            <div className='advanced-filters-btn' onClick={ handleButtonClick }>
                <img src={ process.env.PUBLIC_URL + '/icons/settings-alt.svg'} alt='Advanced Filters' />
            </div>
            { modalVisible && modal }
        </div>
    )
}

export default AdvancedBrowserFilters;