import { useFormik } from 'formik';

interface Props {
    email: string;
}

const hideEmail = (email: string) => {
    const hide = email.split("@")[0].length - 2;
    const regex = new RegExp('.{' + hide + '}@', 'g');
    return email.replace(regex, '***@');
}

export function VerificationForm({ email }: Props) {
    // Query code from email

    const formik = useFormik({
        initialValues: { code: '' },
        onSubmit: ({ code }) => {

        }
    });

    return (
        <div>
            <p>An e-mail has been sent to { hideEmail(email) }</p>
            <form onSubmit={ formik.handleSubmit }>
                <label htmlFor='code'>Verification code</label>
                <input
                    name='code'
                    type='text'
                    onChange={ formik.handleChange }
                    value={ formik.values.code }
                />
            </form>
        </div>
    )
}