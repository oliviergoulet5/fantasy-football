interface Props {
    name: string,
    stats: Array<{ statName: string, statValue: string }>;
}

export function StatsCard({ name, stats }: Props) {
    return (
        <div className='rounded-md px-4 py-2 border max-w-max'>
            <h1 className='text-lg font-bold'>{ name }</h1>
            <div className='flex flex-col text-sm'>
                { stats.map((stat) => 
                    <div className='flex justify-between space-x-8 space-y-3 items-end border-b'>
                        <p className='font-semibold'>{ stat.statName }</p>
                        <p>{ stat.statValue }</p>
                    </div>
                )}
            </div>
        </div>
    )
}