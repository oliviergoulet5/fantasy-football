import { MouseEvent, useState } from 'react';

export function Player() {
    const [ hovering, setHovering ] = useState(false);

    const statsPopup =
        <div className='rounded-sm border-gray-600 border p-2 text-white absolute ml-20 bg-gray-800'>
            <table className='text-center'>
                <tr>
                    <th className='pr-4 text-left'>Statistic</th>
                    <th className='pl-4 text-left'>Value</th>
                    <th className='pl-4 text-left'>Points</th>
                </tr>
                <tr className='text-right'>
                    <td className='text-left'>Minutes</td>
                    <td>90</td>
                    <td>2</td>
                </tr>
                <tr className='text-right'>
                    <td className='text-left'>BPS</td>
                    <td>10</td>
                </tr>
            </table>
        </div>

    const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => setHovering(true);

    const handleMouseOut = (event: MouseEvent<HTMLDivElement>) => setHovering(false);

    return (
        <div onMouseOver={ handleMouseOver } onMouseOut={ handleMouseOut } className='text-center w-max m-0.5 text-xs select-none cursor-default'>
            <p className='bg-yellow-500 rounded-full text-right w-max ml-auto px-2 py-1 text-xs text-shadow-lg shadow-lg'><b>BPS</b> 10</p>
            { hovering && statsPopup }
            <div className='w-12 mx-4 my-1'>
                <img className='w-full' src='images/jersey.png' alt='player'/>
            </div>
            <p className='font-bold text-shadow-heavy text-white'>Goulet</p>
            <p className='text-shadow-heavy font-bold text-white'>1</p>
        </div>
    )
}