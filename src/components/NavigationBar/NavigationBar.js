import './NavigationBar.scss';
import React, { useState } from 'react';

function NavigationBar(props) {

    return (
        <div className='navbar'>
            <div className='left'>
                <img className='logo' src={process.env.PUBLIC_URL + '/soccer-ball.png'} alt='logo' />
                <p>Fantasy Football</p>
            </div>
            <div className='nav-links'>
                <p>Home</p>
                <p>Watchlist</p>
                <p>Live Matches</p>
            </div>
            <div className='right'>
                <p className='pill-button' onClick={ props.actions.setLoginModalVisibility }>Sign in</p>
            </div>
        </div>
    )
}

export default NavigationBar;