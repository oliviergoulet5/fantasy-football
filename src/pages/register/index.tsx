import { RegisterForm } from '../../common/components/authenticationModal/index';
import { useRouter } from 'next/router';
import { AuthLayout } from '../../common/layouts';
import { useEffect, useState } from 'react';
import { LoginFormValues, RegisterFormValues } from '../../types';
import { useIsAuth } from '../../common/hooks';
type FormValues = LoginFormValues & RegisterFormValues;

function Login() {
    const router = useRouter();
    const isAuth = useIsAuth({ redirect: false });

    if (isAuth) {
        router.replace('/');
        return null;
    }

    const handleOnSuccess = () => {
        router.reload();
    }

    return (
        <AuthLayout>
            <RegisterForm 
                switchToLogin={ () => router.replace('/login') }
                onSuccess={ handleOnSuccess }
            />
        </AuthLayout>
    );    
}

export default Login;