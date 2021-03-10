import { Formik, FormikHelpers, Form } from 'formik';
import { FormField } from '../../components/FormField';
import { validationSchema } from './registerForm/validationSchema';
import { RegisterFormValues } from '../../../types';
import { toErrorMap } from '../../utils';
import { useRegisterMutation } from '../../generated/graphql';

interface Props {
    switchToLogin: (values: RegisterFormValues) => void;
    savedValues: RegisterFormValues;
    setModalVisible: (value: boolean) => void;
};

export function RegisterForm({ switchToLogin, savedValues, setModalVisible }: Props) {
    const [register, { data: registerData }] = useRegisterMutation();

    const registerHandler = async (
        values: RegisterFormValues,
        { setSubmitting, setErrors }: FormikHelpers<RegisterFormValues>
    ) => {
        setSubmitting(true);

        const response = await register({
            variables: values,
        });

        if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
        } else if (response.data?.register.account) {
            setModalVisible(false);
        }

        setSubmitting(false);
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
                                className={`hover:bg-blue-800 px-8 py-2 button ${
                                    disabled ? 'primary-disabled' : 'primary'
                                }`}
                            />
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
