import { RegisterForm } from '../../common/components/authenticationModal/index';
import { useRouter } from 'next/router';
import { AuthLayout } from '../../common/layouts';
import { useEffect, useState } from 'react';
import { LoginFormValues, RegisterFormValues } from '../../types';
type FormValues = LoginFormValues & RegisterFormValues;

function Login() {
    const router = useRouter();

    const [savedValues, setSavedValues] = useState<FormValues>({
        email: '',
        username: '',
        password: '',
    });

    const handleSwitch = (values: Partial<FormValues>) => {
        setSavedValues({ ...savedValues, ...values });
    }

    useEffect(() => {
        router.replace('/register');
    }, [savedValues]);

    return (
        <AuthLayout>
            <RegisterForm 
                switchToLogin={ handleSwitch }
                savedValues={ savedValues }
            />
        </AuthLayout>
    );    
}

export default Login;