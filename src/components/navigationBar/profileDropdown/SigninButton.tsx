import { useContext } from 'react';
import AccountModalContext from '../../../contexts/AccountModalContext';

function SigninButton() {
    const { setAccountModalVisible } = useContext(AccountModalContext)!;

    return (
        <div
            onClick={() => {
                setAccountModalVisible(true);
            }}
            className="button primary flex content-center h-8 px-4 leading-tight"
        >
            <p className="text-sm">Sign In</p>
        </div>
    );
}

export default SigninButton;
