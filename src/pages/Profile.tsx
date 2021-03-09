import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProfileQuery, useMeProfileQuery } from '../generated/graphql';
import Biography from './profile/Biography';
import Favourites from './profile/Favourites';

import ProfileHead from './profile/ProfileHead';

function Profile() {
    const { id: idString } = useParams<{ id?: string }>();

    // Checks whether the route is pointing to logged in user, else set id to the parameter if valid or else 0.
    const { data: meProfileData } = useMeProfileQuery();
    const isUser = idString === undefined || meProfileData?.me?.id === parseInt(idString);
    const id = (isUser) ? (meProfileData?.me?.id) : parseInt(idString || '0');

    const { loading: fetchingProfile, data: profileData } = useGetProfileQuery({
        variables: { id: id || 0 }
    });

    if (profileData?.accounts.length === 0) return null; // reroute to 404

    const { avatarLocation, username, name, favouriteTeam, bio } = profileData?.accounts[0] || {};

    let render = profileData && <>
        <ProfileHead data={{
            avatarLocation,
            name,
            username,
            followers: 0,
            following: 0
            }}
            isUser={ isUser }
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