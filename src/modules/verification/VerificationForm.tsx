import { useFormik } from 'formik';
import { useVerifyMutation } from '../../common/generated/graphql';

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
    const [verify, result] = useVerifyMutation();

    const formik = useFormik({
        initialValues: { code: '' },
        onSubmit: ({ code }, { setSubmitting }) => {
            setSubmitting(false);
            verify({
                variables: {
                    email,
                    code 
                }
            }).then(() => {
                
            });
            setSubmitting(true);
        }
    });

    return (
        <div className='flex flex-col h-64 justify-items-auto space-y-10'>
            <div className='flex flex-col space-y-2'>
                <p>An email has been sent to <span className='font-semibold'>{ hideEmail(email) }</span></p>
                <p>Didn't receive an email? <span className='text-blue-700 underline cursor-pointer'>Send again</span>.</p>
            </div>
            <form onSubmit={ formik.handleSubmit }>
                <div className='flex flex-col'>
                    <label htmlFor='code' className='font-semibold text-sm'>Enter code</label>
                    <input
                        name='code'
                        type='text'
                        onChange={ formik.handleChange }
                        value={ formik.values.code }
                        className='input-text'
                    />
                </div>
                <input type='submit' value='Verify' className='primary-button px-6 mt-6'/>
            </form>
        </div>
    )
}