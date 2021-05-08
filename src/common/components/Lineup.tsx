// use flex-order to reverse if its other team
import { Player } from './lineup/Player';

interface Props {
    venue: 'home' | 'away';
}

export function Lineup({ venue }: Props) {
    return (
        <div className='w-1/2'>
            <div className='flex mb-4'>
                <p className='text-2xl font-bold mr-3'>Fulham FC</p>
                <p className='bg-gray-300 text-center rounded-md px-2 self-center py-1 font-semibold text-gray-400'>{ venue.toUpperCase() }</p>
            </div>
            <div className='bg-green-500 object-contain bg-center border-8 rounded-lg border-green-400' style={{
                backgroundImage: `url("/images/Field${venue.charAt(0).toUpperCase() + venue.slice(1)}.svg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className={`flex flex-col ${ venue === 'home' ? 'flex-col' : 'flex-col-reverse' }`}>
                    <div className='flex justify-evenly'>
                        <Player />
                    </div>
                    <div className='flex justify-evenly'>
                        <Player />
                        <Player />
                        <Player />
                    </div>
                    <div className='flex justify-evenly'>
                        <Player />
                        <Player />
                        <Player />
                        <Player />
                        <Player />
                    </div>
                    <div className='flex justify-evenly'>
                        <Player />
                        <Player />
                    </div>
                </div>
            </div>
        </div>
    )
}