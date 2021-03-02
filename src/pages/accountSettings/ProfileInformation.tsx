import React from 'react';
import avatarDefault from '../../images/illustrations/avatar-default.jpg';
import { CLUBS } from '../../constants';
import { Formik, FormikHelpers, Form } from 'formik';
import FormField from '../../components/FormField';
import FormDropdown from '../../components/FormDropdown';
import validationSchema from './profileInformation/validationSchema';
import FormTextArea from '../../components/FormTextArea';

type ProfileInformationFormValues = {
    avatar: string,
    name: string,
    bio: string,
    favouriteTeam: string
}

function ProfileInformation() {
    const initialValues: ProfileInformationFormValues = {
        name: '',
        bio: '',
        avatar: 'profilePicture.png',
        favouriteTeam: 'None'
    };

    const updateProfileInformation = async (
        values: ProfileInformationFormValues,
        { setSubmitting, setErrors }: FormikHelpers<ProfileInformationFormValues>
    ) => {
        setSubmitting(true);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ updateProfileInformation }
            validationSchema={ validationSchema }
        > 
        {({ values, isSubmitting, errors, isValid, setFieldValue, submitForm }) => {
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
                                    />
                                </div>
                                <div>
                                    <FormDropdown name='favouriteTeam' options={['None', ...CLUBS ]} errorMessage={ errors.favouriteTeam } setFieldValue={ setFieldValue } />
                                </div>
                                <button type='submit' onClick={ submitForm } className='primary button w-24 text-center'>Save</button>
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