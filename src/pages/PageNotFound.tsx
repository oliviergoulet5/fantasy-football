import React from 'react';
import { ReactComponent as NotFoundImage } from '../images/illustrations/not-found.svg';

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Page not found</h1>
                <p className="text-lg font-semibold">
                    It appears the page you've requested does not exist.
                </p>
                <NotFoundImage className="w-1/2 mx-auto" />
            </div>
        </div>
    );
}

export default PageNotFound;
