interface BiographyProps {
    data: {
        bio?: string | null
    }
}

function Biography({ data: { bio }}: BiographyProps) {

    return (
        <div className='fg-item px-10 py-5'>
            <header className='font-bold text-lg'>Biography</header>
            <p className=''>{bio}</p>
        </div>
    )
}

export default Biography;