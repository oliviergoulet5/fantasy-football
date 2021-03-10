interface Props {
    data: {
        favouriteTeam?: string | null;
    }
}

export function Favourites({ data: { favouriteTeam }}: Props) {
    return (
        <div className='fg-item flex px-10 py-5 justify-between'>
            <div className='flex flex-col justify-center'>
                <p className='font-bold text-lg'>Favourite Team</p>
                <p>{ favouriteTeam }</p>
                <img className='justify-self-center' src='' alt='emblem'/>
            </div>

            <div className='flex flex-col'>
                <p className='font-bold text-lg'>Favourite Players</p>
                <img className='justify-self-center' src='' alt='collection of players'/>
            </div>
        </div>
    )
}