import React, { useState, useReducer } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import * as yup from 'yup';
import LoginForm from './loginRegisterModal/LoginForm';
import RegisterForm from './loginRegisterModal/RegisterForm';
import { LoginFormValues, RegisterFormValues } from '../types';

type FormValues = LoginFormValues & RegisterFormValues;

enum Mode {
    Login,
    Register,
    Verification,
}

type Action = {
    field: keyof FormValues,
    value: string
}

const titleText = new Map<Mode, string>([
    [Mode.Login, 'Login'],
    [Mode.Register, 'Register'],
    [Mode.Verification, 'Verify your email'],
]);

function LoginRegisterModal() {
    const [mode, setMode] = useState(Mode.Login);
    const [savedValues, setSavedValues ] = useState<FormValues>({ email: '', username: '', password: '' });

    const handleModeChange = (values: Partial<FormValues>) => {
        if (mode === Mode.Verification) {
            return;
        }
        
        setSavedValues({...savedValues, ...values });
        setMode(mode === Mode.Login ? Mode.Register : Mode.Login);
    };

    const getValues = (values: Partial<FormValues>) => setSavedValues({ ...savedValues, ...values });

    const validationSchema = () => {
        return yup.object().shape({
            email: yup
                .string()
                .matches(
                    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                )
                .required(),
            password: yup.string().min(8).required(),
            username:
                mode === Mode.Register
                    ? yup.string().max(25).min(3).required()
                    : yup.string(),
        });
    };

    return (
        <div className="justify-items-center fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center w-screen h-screen overflow-y-auto bg-black bg-opacity-50">
            <div className="fg-item sm:w-96 relative w-3/4 px-10 py-4 m-auto text-center select-none">
                <h1 className="mb-12 text-2xl font-bold">
                    {titleText.get(mode)}
                </h1>
                {mode === Mode.Login ? (
                    <LoginForm switchToRegister={ handleModeChange } savedValues={ savedValues } />
                ) : (
                    <RegisterForm switchToLogin={ handleModeChange } savedValues={ savedValues } />
                )}
                <hr className="my-4" />
            </div>
        </div>
    );
}

export default LoginRegisterModal;