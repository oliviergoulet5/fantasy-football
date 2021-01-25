import './BrowserFilters.scss'
import Filter from '../Filter/Filter';
import AdvancedBrowserFilters from '../AdvancedBrowserFilters/AdvancedBrowserFilters';
import React from 'react';
import Slider from '../Slider/Slider';

function BrowserFilters() {
    let clubOptions = ['Any', 'Arsenal', 'Aston Villa', 'Brighton and Hove Albion', 'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Fulham', 'Leeds United', 'Leicester City', 'Liverpool', 'Manchester City', 'Manchester United', 'Sheffield United', 'Southampton', 'Tottenham Hotspur', 'West Bromwich Albion', 'West Ham United', 'Wolverhampton Wanderers'];
    let positionOptions = ['Any', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper'];
    return (
        <div className='filters-container'>
            <Filter name='search' type='search' />
            <Filter name='club' type='dropdown' options={ clubOptions } />
            <Filter name='position' type='dropdown' options={ positionOptions } />
            <AdvancedBrowserFilters>
                <Slider min={1} max={100} />
            </AdvancedBrowserFilters>
        </div>
    );
}

export default BrowserFilters;