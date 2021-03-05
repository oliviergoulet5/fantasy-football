import React from 'react';
import avatarDefault from '../../images/illustrations/avatar-default.jpg';
import { CLUBS } from '../../constants';
import { Formik, FormikHelpers, Form } from 'formik';
import FormField from '../../components/FormField';
import FormDropdown from '../../components/FormDropdown';
import validationSchema from './profileInformation/validationSchema';
import FormTextArea from '../../components/FormTextArea';
import {useMeProfileQuery, useUpdateProfileMutation, useUpdateAvatarMutation } from '../../generated/graphql';
import toErrorMap from '../../utils/toErrorMap';
import getChangedValues from '../../utils/getChangedValues';

// Todo: manage 'success' state of form better. It should be reset when an error has been logged or a change has been made.

type ProfileInformationFormValues = {
    name: string,
    bio: string,
    favouriteTeam: string
}

type TempFormValues = {
    avatar?: FileList[0]
}

const defaultValues: ProfileInformationFormValues = {
    name: '',
    bio: '',
    favouriteTeam: 'None',
}

function ProfileInformation() {
    const { loading: fetchingAccount, data: accountData } = useMeProfileQuery();
    const [updateProfile] = useUpdateProfileMutation();
    const [updateAvatar] = useUpdateAvatarMutation();

    if (fetchingAccount || accountData?.me === null || accountData?.me === undefined) return null;

    const initialValues: ProfileInformationFormValues & TempFormValues = {
        name: accountData.me.name || defaultValues.name,
        bio: accountData.me.bio || defaultValues.bio,
        favouriteTeam: accountData.me.favouriteTeam || defaultValues.favouriteTeam
    };

    const updateProfileInformation = async (
        values: ProfileInformationFormValues & TempFormValues,
        { setSubmitting, setErrors, setStatus }: FormikHelpers<ProfileInformationFormValues>
    ) => {
        setSubmitting(true);
        
        const profileResponse = await updateProfile({
            variables: getChangedValues(values, initialValues)
        });

        if (profileResponse.data?.updateAccount.errors) {
            setErrors(toErrorMap(profileResponse.data.updateAccount.errors));
            setStatus('error')
        } else if (profileResponse.data?.updateAccount.account) {
            setStatus('success');
        }

        if (values.avatar) {
            const avatarResponse = await updateAvatar({ variables: { avatar: values.avatar } });
        }

        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ updateProfileInformation }
            validationSchema={ validationSchema }
        > 
        {({ values, errors, isValid, isSubmitting, setFieldValue, submitForm, status }) => {
            let disabled = isSubmitting || !isValid;
            
            return (
                <Form>
                    <div className='px-4 py-2'>
                        <h1 className='font-bold py-2 text-2xl'>Profile Information</h1>
                        <div className='flex mt-6'>
                            <div>
                                <p className='label'>Avatar</p>
                                <div>
                                    <img src={ avatarDefault } alt='avatar-preview' className='rounded-full h-24' />
                                    <p>Change picture</p>
                                    <input type='file' name='avatar' onChange={
                                        (event: React.ChangeEvent<HTMLInputElement>) => {
                                            if (!event.target.files) return;
                                            setFieldValue('avatar', event.target.files[0]);
                                        }
                                    }/>
                                </div>
                            </div>
                            <div className='flex flex-col space-y-4 ml-24 w-1/3'>
                                <FormField
                                    name="name"
                                    type="text"
                                    errorMessage={errors.name}
                                />
                                <FormTextArea
                                    name="bio"
                                    placeholder="Maximum of 500 words"
                                    errorMessage={errors.bio}
                                    setFieldValue={ setFieldValue }
                                    value={ values.bio }
                                />
                                <FormDropdown 
                                    name='favouriteTeam' 
                                    options={['None', ...CLUBS ]} 
                                    errorMessage={ errors.favouriteTeam } 
                                    setFieldValue={ setFieldValue } 
                                    value={ values.favouriteTeam }
                                />
                                <input type='submit' value='Save' disabled={disabled} onClick={ submitForm } className={`button w-24 text-center ${
                                    disabled ? 'primary-disabled' : 'primary'
                                }`}  />

                                {(status === 'success' && !disabled) && <p>Saved changes</p>}
                            </div>
                        </div>
                    </div>
                </Form>
            );
        }}
        </Formik>
    )
}

export default ProfileInformation;