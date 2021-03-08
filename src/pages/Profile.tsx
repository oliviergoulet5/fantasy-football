import React from 'react';
import { useMeProfileQuery } from '../generated/graphql';
import Biography from './profile/Biography';
import Favourites from './profile/Favourites';

import ProfileHead from './profile/ProfileHead';
function Profile() {
    const { loading: fetchingProfile, data: profileData } = useMeProfileQuery();
    const { avatarLocation, username, name, favouriteTeam, bio } = profileData?.me || {};

    let render = profileData && <>
        <ProfileHead data={{
            avatarLocation,
            name,
            username,
            followers: 0,
            following: 0
            }}
        />
        <Biography data={{
            bio
        }}/>
        <Favourites data={{
            favouriteTeam
        }} />
    </>


    return (
        <div className='flex flex-col w-2/3 m-auto space-y-6'>
            { render }
        </div>
    )
}

export default Profile;