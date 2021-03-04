import React from 'react';
import avatarDefault from '../../images/illustrations/avatar-default.jpg';
import { CLUBS } from '../../constants';
import { Formik, FormikHelpers, Form } from 'formik';
import FormField from '../../components/FormField';
import FormDropdown from '../../components/FormDropdown';
import validationSchema from './profileInformation/validationSchema';
import FormTextArea from '../../components/FormTextArea';
import {useMeProfileQuery, useUpdateAccountMutation } from '../../generated/graphql';
import toErrorMap from '../../utils/toErrorMap';

// Todo: manage 'success' state of form better. It should be reset when an error has been logged or a change has been made.

type ProfileInformationFormValues = {
    avatar: string,
    name: string,
    bio: string,
    favouriteTeam: string
}

function ProfileInformation() {
    const { loading: fetchingAccount, data: accountData } = useMeProfileQuery();
    const [updateAccount] = useUpdateAccountMutation();

    if (fetchingAccount) return null;

    const initialValues: ProfileInformationFormValues = {
        name: accountData?.me?.name || '',
        bio: accountData?.me?.bio || '',
        avatar: accountData?.me?.avatar || 'default.png',
        favouriteTeam: accountData?.me?.favouriteTeam || 'None'
    };

    const updateProfileInformation = async (
        values: ProfileInformationFormValues,
        { setSubmitting, setErrors, setStatus }: FormikHelpers<ProfileInformationFormValues>
    ) => {
        setSubmitting(true);
        
        const response = await updateAccount({
            variables: values
        });

        if (response.data?.updateAccount.errors) {
            setErrors(toErrorMap(response.data.updateAccount.errors));
            setStatus('error')
        } else if (response.data?.updateAccount.account) {
            console.log('Saved account information.');
            setStatus('success');
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