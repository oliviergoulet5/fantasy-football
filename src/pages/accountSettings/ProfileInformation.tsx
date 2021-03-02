import React from 'react';
import avatarDefault from '../../images/illustrations/avatar-default.jpg';
import { CLUBS } from '../../constants';
import { Formik, FormikHelpers, Form, setNestedObjectValues } from 'formik';
import FormField from '../../components/FormField';
import FormDropdown from '../../components/FormDropdown';
import validationSchema from './profileInformation/validationSchema';
import FormTextArea from '../../components/FormTextArea';
import {useMeQuery, useUpdateAccountMutation } from '../../generated/graphql';
import toErrorMap from '../../utils/toErrorMap';

type ProfileInformationFormValues = {
    avatar: string,
    name: string,
    bio: string,
    favouriteTeam: string
}

function ProfileInformation() {
    const { loading: fetchingAccount, data: accountData } = useMeQuery();
    const [updateAccount, { data: updateAccountData }] = useUpdateAccountMutation();

    if (fetchingAccount) return null;

    const initialValues: ProfileInformationFormValues = {
        name: accountData?.me?.name || '',
        bio: accountData?.me?.bio || '',
        avatar: 'profilePicture.png',
        favouriteTeam: 'None'
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
        {({ values, errors, isValid, setFieldValue, submitForm, status }) => {
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
                                <div>
                                    <FormField
                                        name="name"
                                        type="text"
                                        errorMessage={errors.name}
                                    />
                                </div>
                                <div>
                                    <FormTextArea
                                        name="bio"
                                        placeholder="Maximum of 500 words"
                                        errorMessage={errors.name}
                                        setFieldValue={ setFieldValue }
                                        value={ values.bio }
                                    />
                                </div>
                                <div>
                                    <FormDropdown name='favouriteTeam' options={['None', ...CLUBS ]} errorMessage={ errors.favouriteTeam } setFieldValue={ setFieldValue } />
                                </div>
                                <button type='submit' onClick={ submitForm } className='primary button w-24 text-center'>Save</button>
                                {status == 'success' && <p>Saved changes</p>}
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