import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

enum Mode {
    Login,
    Register,
    Verification,
}

const modeText = new Map<Mode, string>([
    [Mode.Login, 'Login'],
    [Mode.Register, 'Register'],
    [Mode.Verification, 'Verify your email'],
]);

function LoginRegisterModal() {
    const [mode, setMode] = useState(Mode.Login);

    const handleModeChange = (
        event: React.MouseEvent<HTMLParagraphElement>
    ) => {
        if (mode === Mode.Verification) {
            return;
        }
        setMode(mode === Mode.Login ? Mode.Register : Mode.Login);
    };

    const validationSchema = () => {
        return yup.object().shape({
            email: yup
                .string()
                .matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
                .required(),
            password: yup
                .string()
                .required(),
            username: (mode === Mode.Register) ? yup.string().max(25).required() : yup.string()
        })
    }


    return (
        <div className="justify-items-center fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center w-screen h-screen overflow-y-auto bg-black bg-opacity-50">
            <div className="fg-item sm:w-96 relative w-3/4 px-10 py-4 m-auto text-center select-none">
                <h1 className="mb-12 text-2xl font-bold">
                    {modeText.get(mode)}
                </h1>
                <Formik
                    initialValues={{ email: '', username: '', password: '' }}
                    onSubmit={(data, { setSubmitting }) => {
                        setSubmitting(true);
                        // set async code here
                        setSubmitting(false);
                    }}
                    validationSchema={ validationSchema }
                >
                    {({
                        values,
                        isSubmitting,
                        errors
                    }) => (
                        <form className="text-left">
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <pre>{JSON.stringify(errors, null, 2)}</pre>
                            {/* Email */}
                            <label htmlFor="email" className="label block">
                                Email
                            </label>
                            <Field
                                name="email"
                                type="input"
                                className="input-text"
                            />

                            {/* Username */}
                            {mode === Mode.Register && (
                                <>
                                    <label
                                        htmlFor="username"
                                        className="label block"
                                    >
                                        Username
                                    </label>
                                    <Field
                                        name="username"
                                        type="input"
                                        className="input-text"
                                    />
                                </>
                            )}

                            {/* Password */}
                            <label htmlFor="password" className="label block">
                                Password
                            </label>
                            <Field
                                name="password"
                                type="password"
                                className="input-text"
                            />
                            {mode === Mode.Login && (
                                <a
                                    href="#"
                                    className="inline-block w-full text-sm text-right text-blue-700 underline"
                                >
                                    Forgot Password?
                                </a>
                            )}

                            {/* Submit & Change Mode */}
                            <div className="flex justify-between mt-10">
                                <input
                                    disabled={isSubmitting}
                                    type="submit"
                                    value="Login"
                                    className="hover:bg-blue-800 px-8 py-2 font-semibold text-white bg-blue-700 rounded-md"
                                />
                                <p className="self-center w-full ml-4 font-semibold">
                                    {mode === Mode.Login
                                        ? 'New user?'
                                        : 'Existing user?'}
                                    <p
                                        onClick={handleModeChange}
                                        className="inline-block ml-2 text-sm text-right text-blue-700 underline cursor-pointer"
                                    >
                                        {mode === Mode.Login
                                            ? 'Sign up'
                                            : 'Log in'
                                        }
                                    </p>
                                </p>
                            </div>
                        </form>
                    )}
                </Formik>

                <hr className="my-4" />
            </div>
        </div>
    );
}

export default LoginRegisterModal;

/*
                    validate={(values) => {
                        let errors: Record<string, string> = {};
                        
                        const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                        if (!emailPattern.test(values.email)) {
                            errors.email = 'Not a valid email address.'
                        }
                        return errors;
                    }}
                    */