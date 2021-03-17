import { noCache } from '../../common/utils';
import Link from 'next/link';

interface Props {
    data: {
        avatarLocation?: string | null;
        username?: string | null;
        name?: string | null;
        followers?: number | null;
        following?: number | null;
    };
    isUser: boolean;
}

export function ProfileHead({
    data: { username, name, avatarLocation },
    isUser,
}: Props) {
    const buttonRender = isUser ? (
        <button className='button bg-gray-400 text-white w-32 ml-8'>
            Edit Profile
        </button>
    ) : (
        <Link href='/settings/profile-information'>
            <span className='button px-4 bg-red-400 text-white ml-8'>
                Follow
            </span>
        </Link>
    );

    return (
        <div className='flex fg-item p-10'>
            <img
                className='h-32 w-32 rounded-full'
                src={
                    avatarLocation
                        ? noCache(avatarLocation)
                        : '/images/avatar-default.jpg'
                }
                alt='Avatar'
            />
            <div className='ml-8'>
                <header className='font-bold text-2xl'>{username}</header>
                <p className='font-medium text-gray-700'>{name}</p>
            </div>
            <div className='flex w-full items-start justify-end'>
                <div className='flex space-x-4 items-center'>
                    <p className='font-medium'>
                        Following{' '}
                        <span className='font-normal text-gray-700'>10</span>
                    </p>
                    <p className='font-medium'>
                        Followers{' '}
                        <span className='font-normal text-gray-700'>4</span>
                    </p>
                    {buttonRender}
                </div>
            </div>
        </div>
    );
}
