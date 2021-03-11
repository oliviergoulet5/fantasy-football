import { useMeProfileQuery, useUpdateAvatarMutation, useUpdateProfileMutation } from '../../../common/generated/graphql';
import { SettingsLayout, MainLayout } from '../../../common/layouts';
import { AVATAR_DEFAULT, CLUBS } from '../../../constants';
import { NetworkStatus } from '@apollo/client';
import { Formik, FormikHelpers, Form } from 'formik';
import { FormField, FormDropdown, FormTextArea } from '../../../common/components';
import {toErrorMap, getChangedValues, noCache } from '../../../common/utils';
import { validationSchema } from '../../../modules/settings/profile-information';

interface ProfileInformationFormValues {
    name: string,
    bio: string,
    favouriteTeam: string,
    avatarLocation: string
}

interface TempFormValues {
    avatar?: FileList[0]
}

const defaultValues: ProfileInformationFormValues = {
    name: '',
    bio: '',
    favouriteTeam: 'None',
    avatarLocation: AVATAR_DEFAULT
}

function ProfileInformation() {
    const { loading: loadingAccount, data: profileData, refetch, networkStatus } = useMeProfileQuery();
    const [updateProfile] = useUpdateProfileMutation();
    const [updateAvatar] = useUpdateAvatarMutation();

    if (loadingAccount || networkStatus == NetworkStatus.refetch || profileData?.me === null || profileData?.me === undefined) return null;

    let initialValues: ProfileInformationFormValues & TempFormValues = {
        name: profileData.me.name || defaultValues.name,
        bio: profileData.me.bio || defaultValues.bio,
        favouriteTeam: profileData.me.favouriteTeam || defaultValues.favouriteTeam,
        avatarLocation: profileData.me.avatarLocation || defaultValues.avatarLocation
    };

    const updateProfileInformation = async (
        values: ProfileInformationFormValues & TempFormValues,
        { setSubmitting, setErrors, setStatus }: FormikHelpers<ProfileInformationFormValues>
    ) => {
        setSubmitting(true);
        const profileResponse = await updateProfile({
            variables: getChangedValues(values, initialValues)
        });
        console.log(values.avatarLocation);
        if (profileResponse.data?.updateAccount.errors) {
            setErrors(toErrorMap(profileResponse.data.updateAccount.errors));
            setStatus('error')
        } else if (profileResponse.data?.updateAccount.account) {
            setStatus('success');
        }

        if (values.avatar) {
            await updateAvatar({ variables: { avatar: values.avatar } });
            refetch();
        }

        setSubmitting(false);
    }


    return (
        <MainLayout>
            <SettingsLayout>
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
                                        <p className='label mb-2'>Avatar</p>
                                        <div>
                                            <img src={ noCache(profileData.me?.avatarLocation || defaultValues.avatarLocation) } alt='avatar-preview' className='rounded-full h-24' />
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
            </SettingsLayout>
        </MainLayout>
    )
}

export default ProfileInformation;