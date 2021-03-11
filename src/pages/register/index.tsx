import { RegisterForm } from '../../common/components/authenticationModal/index';
import { useRouter } from 'next/router';
import { AuthLayout } from '../../common/layouts';
import { useIsAuth } from '../../common/hooks';

function Register() {
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

export default Register;