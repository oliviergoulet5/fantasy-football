import { PropsWithChildren } from 'react';
import { NavigationBar } from '../components';

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <div className='h-screen bg-gray-100'>
            <NavigationBar />
            <main className='h-screen w-full max-w-6xl m-auto mt-12'>
                {children}
            </main>
        </div>
    );
};
