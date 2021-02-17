import React from 'react';
import avatarDefault from '../../images/illustrations/avatar-default.jpg';

function ProfileInformation() {

    return (
        <div className='px-4 py-2'>
            <h1 className='font-bold py-2 text-2xl'>Profile Information</h1>
            <div className='flex mt-6'>
                <div>
                    <p className='label'>Avatar</p>
                    <div>
                        <img src={ avatarDefault } alt='avatar-preview' className='rounded-full h-24' />
                        <p>Change picture</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 ml-24 w-full'>
                    <div>
                        <p className='label'>Name</p>
                        <input className='fg-item px-2 py-1' placeholder='current name'/>
                    </div>
                    <div>
                        <p className='label'>Bio</p>
                        <textarea className='fg-item px-2 py-1 w-1/2 h-36' placeholder='Maximum of 500 words'/>
                    </div>
                    <p className='primary button w-24 text-center'>Save</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInformation;