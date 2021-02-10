import { Field, FormikHelpers, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { RegisterFormValues } from '../types';
import FormField from './FormField';

type Props = {
    switchToLogin: (values: RegisterFormValues) => void;
    savedValues: RegisterFormValues;
};

function RegisterForm({ switchToLogin, savedValues }: Props) {
    const handleSubmit = (
        data: RegisterFormValues,
        { setSubmitting }: FormikHelpers<RegisterFormValues>
    ) => {
        setSubmitting(true);
        // set async code here
        setSubmitting(false);
    };

    const validationSchema = () => {
        return yup.object().shape({
            email: yup
                .string()
                .email('invalid email address')
                .matches(
                    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                )
                .required(),
            password: yup.string().min(8).required(),
            username: yup.string().max(25).min(3).required(),
        });
    };

    return (
        <Formik
            initialValues={{ email: savedValues.email, username: savedValues.username, password: savedValues.password }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={true}
        >
            {({ values, isSubmitting, errors }) => (
                <form className="text-left">
                    <FormField name='email' type='text' errorMessage={ errors.email } />
                    <FormField name='username' type='text' errorMessage={ errors.username } />
                    <FormField name='password' type='password' errorMessage={ errors.password } />

                    {/* Submit */}
                    <div className="flex justify-between mt-10">
                        <input
                            disabled={isSubmitting}
                            type="submit"
                            value="Login"
                            className="hover:bg-blue-800 px-8 py-2 font-semibold text-white bg-blue-700 rounded-md"
                        />
                        <p className="self-center w-full ml-4 text-sm font-semibold">
                            Existing user?
                            <p
                                onClick={ () => switchToLogin(values) }
                                className="inline-block ml-2 text-right text-blue-700 underline cursor-pointer"
                            >
                                Login
                            </p>
                        </p>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default RegisterForm;
