import React, { useState } from 'react';

enum Mode {
    Login,
    Register,
    Verification,
}

const modeText = new Map<Mode, string>([
    [Mode.Login, 'Login'],
    [Mode.Register, 'Register'],
    [Mode.Verification, 'Verify your email'],
]);

function LoginRegisterModal() {
    const [mode, setMode] = useState(Mode.Login);

    const handleModeChange = (event: React.MouseEvent<HTMLParagraphElement>) => {
        if (mode === Mode.Verification) {
            return;
        }
        setMode(mode === Mode.Login ? Mode.Register : Mode.Login);
    }

    return (
        <div className="flex justify-items-center items-center fixed left-0 top-0 bottom-0 right-0 z-50 overflow-y-auto h-screen w-screen bg-black bg-opacity-50">
            <div className="relative fg-item m-auto py-4 px-10 text-center select-none sm:w-96 w-3/4">
                <h1 className="text-2xl font-bold mb-12">
                    {modeText.get(mode)}
                </h1>
                <form className="text-left">
                    <label htmlFor="email" className="font-bold block">
                        Email
                    </label>
                    <input
                        name="email"
                        className="fg-item block focus:ring-blue-700 focus:primary h-8 px-2 mb-4 w-full"
                    />

                    {mode === Mode.Register && (
                        <>
                            <label
                                htmlFor="username"
                                className="font-bold block"
                            >
                                Username
                            </label>
                            <input
                                name="username"
                                className="fg-item block focus:ring-blue-700 focus:primary h-8 px-2 mb-4 w-full"
                            />
                        </>
                    )}

                    <label htmlFor="password" className="font-bold block">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        className="fg-item block focus:ring-blue-700 focus:primary h-8 px-2 w-full"
                    />
                    {mode === Mode.Login && (
                        <a
                            href="#"
                            className="inline-block w-full text-right text-sm text-blue-700 underline"
                        >
                            Forgot Password?
                        </a>
                    )}

                    <div className="flex mt-10 justify-between">
                        <input
                            type="submit"
                            value="Login"
                            className="py-2 px-8 font-semibold bg-blue-700 text-white rounded-md hover:bg-blue-800"
                        />
                        <p className="w-full self-center font-semibold ml-4">
                            { mode === Mode.Login ? 'New user?' : 'Existing user?'}
                            <p
                                onClick={handleModeChange}
                                className="cursor-pointer inline-block text-right text-sm text-blue-700 underline ml-2"
                            >
                                { mode === Mode.Login ? 'Sign up' : 'Log in'}
                            </p>
                        </p>
                    </div>
                </form>
                <hr className="my-4" />
            </div>
        </div>
    );
}

export default LoginRegisterModal;
