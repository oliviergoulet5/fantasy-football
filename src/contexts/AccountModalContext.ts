import { createContext } from 'react';

type AccountModalContextType = {
    accountModalVisible: boolean;
    setAccountModalVisible: (value: boolean) => void;
};

const AccountModalContext = createContext<AccountModalContextType | undefined>(
    undefined
);

export default AccountModalContext;
