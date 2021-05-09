import { MainLayout } from '../../common/layouts';
import { useGetClubFromURL } from '../../common/utils/getClubFromUrl';
import { ClubHead, Overview, Stats, Fixtures } from '../../modules/club';
import { useState } from 'react';

type Tab = 'overview' | 'stats' | 'fixtures';

function ClubContent() {
    const [currentTab, setCurrentTab] = useState<Tab>('overview');
    const { data, error, loading } = useGetClubFromURL();

    if (!data?.club || loading) {
        return null;
    }

    const socialMedia = {
        facebook: data.club.socialMedia.facebook as string | undefined,
        twitter: data.club.socialMedia.twitter as string | undefined,
        instagram: data.club.socialMedia.instagram as string | undefined,
        youtube: data.club.socialMedia.youtube as string | undefined,
        tiktok: data.club.socialMedia.tiktok as string | undefined
    }; 

    let content: JSX.Element;

    switch(currentTab) {
        case 'stats':
            content = <Stats />
            break;
        case 'fixtures':
            content = <Fixtures />
            break;
        default:
            content = <Overview />
    }

    return (
        <MainLayout>
            <div className='flex flex-col space-y-4'>
                <ClubHead name={ data.club.name } crestLocation={ data.club.crestLocation } socialMedia={ socialMedia }/>
                <div className=''>
                    <nav className='w-full'>
                        <ul className='flex'>
                            <li onClick={ () => setCurrentTab('overview') }  className={`${ currentTab !== 'overview' ? 'bg-gray-100' : '-mb-0.5'} px-4 py-1 fg-item rounded-b-none cursor-pointer border-b-0 mt-1`}>Overview</li>
                            <li onClick={ () => setCurrentTab('fixtures') } className={`${ currentTab !== 'fixtures' ? 'bg-gray-100' : '-mb-0.5'} px-4 py-1 cursor-pointer fg-item rounded-b-none border-b-0 mt-1`}>Fixtures</li>
                            <li onClick={ () => setCurrentTab('stats') } className={`${ currentTab !== 'stats' ? 'bg-gray-100' : '-mb-0.5'} px-4 py-1 cursor-pointer fg-item rounded-b-none border-b-0 mt-1`}>Stats</li>
                        </ul>
                    </nav>
                    <div className='fg-item rounded-t-none p-12'>
                        { content }
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default ClubContent;