
function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen pt-32">
            <div className="space-y-32 text-center">
                <div>
                    <h1 className="text-3xl font-bold">Page not found</h1>
                    <p className="text-lg font-semibold">
                       It appears the page you've requested does not exist.
                    </p>
                </div>
                <div className="w-1/2 mx-auto justify-self-center">
                    <img src='/images/not-found.svg' alt='Not found' />
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;