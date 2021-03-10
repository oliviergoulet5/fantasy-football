import { useContext } from 'react';
import { AccountModalContext } from '../../../contexts';

export function SigninButton() {
    const { setAccountModalVisible } = useContext(AccountModalContext)!;

    return (
        <div
            onClick={() => setAccountModalVisible(true)}
            className="button primary flex content-center h-8 p-4 leading-tight"
        >
            <p className="text-sm">Sign In</p>
        </div>
    )
}