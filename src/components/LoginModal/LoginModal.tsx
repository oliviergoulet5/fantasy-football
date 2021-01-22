import './LoginModal.scss';
import React from 'react';

type Props = {
    setVisibility: (value: boolean) => void
}

function LoginModal({ setVisibility }: Props) {

    const handleClickOutsideModal = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLDivElement).id === 'login-modal') {
            setVisibility(false);
        }
    }

    return (
        <div id='login-modal' onClick={ handleClickOutsideModal }>
            <div className='modal-content'>
                <div className='header'>
                    <img className='close' src={process.env.PUBLIC_URL + '/icons/close-circle-f.svg'} alt='Close' onClick={ () => {
                        setVisibility(false);
                    } }/>
                    <h1>Log in</h1>
                </div>
                <form>
                    <p>Email</p>
                    <input type='text'></input>
                    <p>Password</p>
                    <input type='password'></input>
                    <a href='/'>Forgot Password?</a>
                    <div className='remember-me'>
                        <input name='remember' type='checkbox'></input>
                        <label htmlFor='remember'>Remember Me</label>
                    </div>
                    <div className='submit-options'>
                        <p className='login'>Log in</p>
                        <p>New user? <a href='/'>Sign up</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginModal;