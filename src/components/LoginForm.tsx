import { Field, FormikHelpers, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { LoginFormValues } from '../types';
import FormField from './FormField';

type Props = {
    switchToRegister: (valuesToSave: LoginFormValues) => void;
    savedValues: LoginFormValues;
};

function LoginForm({ switchToRegister, savedValues }: Props) {
    const handleSubmit = (
        data: LoginFormValues,
        { setSubmitting }: FormikHelpers<LoginFormValues>
    ) => {
        setSubmitting(true);
        // set async code here
        setSubmitting(false);
    };

    const validationSchema = () => {
        return yup.object().shape({
            email: yup
                .string()
                .required(),
            password: yup.string().required(),
        });
    };

    return (
        <Formik
            initialValues={{ email: savedValues.email, password: savedValues.password }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ values, isSubmitting, errors }) => (
                <form className="text-left">
                    <FormField name='email' type='text' errorMessage={ errors.email } />
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
                            No account?
                            <p
                                onClick={() => switchToRegister(values) }
                                className="inline-block ml-2 text-sm text-right text-blue-700 underline cursor-pointer"
                            >
                                Signup
                            </p>
                        </p>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default LoginForm;
