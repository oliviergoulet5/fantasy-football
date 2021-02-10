import { FormikHelpers, Formik, Form } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { useRegisterMutation } from '../../generated/graphql';
import { RegisterFormValues } from '../../types';
import toErrorMap from '../../utils/toErrorMap';
import FormField from '../FormField';

type Props = {
    switchToLogin: (values: RegisterFormValues) => void;
    savedValues: RegisterFormValues;
};

function RegisterForm({ switchToLogin, savedValues }: Props) {
    const [register, { data: registerData }] = useRegisterMutation();

    const registerHandler = async (
        values: RegisterFormValues,
        { setSubmitting, setErrors }: FormikHelpers<RegisterFormValues>
    ) => {
        setSubmitting(true);

        const response = await register({
            variables: values
        });

        console.log(response.data?.register.errors);

        if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
        }

        setSubmitting(false);
    };

    const validationSchema = () => {
        return yup.object({
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
            initialValues={{
                email: savedValues.email,
                username: savedValues.username,
                password: savedValues.password,
            }}
            onSubmit={registerHandler}
            validationSchema={validationSchema}
        >
            {({ values, isSubmitting, errors, isValid }) => {
                let disabled = isSubmitting || !isValid;

                return (
                    <Form className="text-left">
                        <FormField
                            name="email"
                            type="text"
                            errorMessage={errors.email}
                        />
                        <FormField
                            name="username"
                            type="text"
                            errorMessage={errors.username}
                        />
                        <FormField
                            name="password"
                            type="password"
                            errorMessage={errors.password}
                        />

                        {/* Submit */}
                        <div className="flex justify-between mt-10">
                            <input
                                disabled={disabled}
                                type="submit"
                                value="Register"
                                className={`hover:bg-blue-800 px-8 py-2 font-semibold text-white rounded-md ${
                                    disabled ? 'primary-disabled' : 'primary'
                                }`}                            />
                            <p className="self-center w-full ml-4 text-sm font-semibold">
                                Existing user?
                                <span
                                    onClick={() => switchToLogin(values)}
                                    className="inline-block ml-2 text-right text-blue-700 underline cursor-pointer"
                                >
                                    Login
                                </span>
                            </p>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default RegisterForm;
