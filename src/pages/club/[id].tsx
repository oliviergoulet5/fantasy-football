import { MainLayout } from '../../common/layouts';
import { useGetClubFromURL } from '../../common/utils/getClubFromUrl';
import { LargeFixture } from '../../common/components';

function ClubContent() {
    const { data, error, loading } = useGetClubFromURL();

    return (
        <MainLayout>
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col fg-item space-y-6'>
                        <div className='bg-green-400 w-full h-48 rounded-t-md'></div>
                        <div className='flex pb-10'>
                            <div>
                                <img className='-mt-12 w-36 mx-6' src={ data?.club.crestLocation || '' } />
                            </div>
                            <div>
                                <h1 className='font-bold text-2xl'>{ data?.club.name || '...' }</h1>
                                <a className='cursor-pointer'>https://website.com/</a>
                                <div className='flex space-x-2 mt-2'>
                                    <img className='h-6 cursor-pointer' src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512' />
                                    <img className='h-6 cursor-pointer' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png' />
                                    <img className='h-6 cursor-pointer' src='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/instagram-512.png' />
                                    <img className='h-6 cursor-pointer' src='https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/youtube_circle-512.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <nav className='w-full'>
                        <ul className='flex'>
                            <li className='px-4 py-1 fg-item rounded-b-none cursor-pointer border-b-0 -mb-0.5 mt-1'>Overview</li>
                            <li className='px-4 py-1 cursor-pointer fg-item bg-gray-100 rounded-b-none border-b-0 mt-1'>Fixtures</li>
                            <li className='px-4 py-1 cursor-pointer fg-item bg-gray-100 rounded-b-none border-b-0 mt-1'>Stats</li>
                        </ul>
                    </nav>
                    <div className='fg-item rounded-t-none p-4'>
                        <LargeFixture />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ClubContent;