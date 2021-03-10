import { FormikHelpers, Formik, Form } from 'formik';
import { useLoginMutation } from '../../generated/graphql';
import { LoginFormValues } from '../../../types';
import { FormField } from '../../components';
import { toErrorMap } from '../../utils';
import { useRouter } from 'next/router';
import { validationSchema } from './loginForm/validationSchema';

type Props = {
    switchToRegister: (valuesToSave: LoginFormValues) => void;
    savedValues: LoginFormValues;
    setModalVisible: (value: boolean) => void;
};

export function LoginForm({ switchToRegister, savedValues, setModalVisible }: Props) {
    const [login] = useLoginMutation();
    const router = useRouter();

    const loginHandler = async (
        values: LoginFormValues,
        { setSubmitting, setErrors }: FormikHelpers<LoginFormValues>
    ) => {
        setSubmitting(true);
        const response = await login({
            variables: { options: values },
        });

        if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
        } else if (response.data?.login.account) {
            setModalVisible(false);
            router.reload();
        }
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{
                email: savedValues.email,
                password: savedValues.password,
            }}
            onSubmit={loginHandler}
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
                            name="password"
                            type="password"
                            errorMessage={errors.password}
                        />

                        {/* Submit */}
                        <div className="flex justify-between mt-10">
                            <input
                                disabled={disabled}
                                type="submit"
                                value="Login"
                                className={`hover:bg-blue-800 px-8 py-2 button ${
                                    disabled ? 'primary-disabled' : 'primary'
                                }`}
                            />
                            <p className="self-center w-full ml-4 text-sm font-semibold">
                                No account?
                                <span
                                    onClick={e => {
                                        switchToRegister(values);
                                    }}
                                    className="inline-block ml-2 text-sm text-right text-blue-700 underline cursor-pointer"
                                >
                                    Sign up
                                </span>
                            </p>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}
