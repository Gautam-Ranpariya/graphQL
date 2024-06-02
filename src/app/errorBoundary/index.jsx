import React from 'react';
// import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="w-full h-screen overflow-y-auto overflow-x-hidden p-4 bg-gray-200">
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-bold text-red-500 text-center">Something went wrong.</h1>
                <p className="mt-4 text-lg text-gray-700 text-center"><b className='text-black'>Error Message : </b>{error.message}</p>
                <div className="mt-2 text-sm text-gray-700 px-5">
                    <p className='text-center'><b className='text-black text-lg'> Error Description : </b>{error.stack}</p>
                </div>
                <button
                    onClick={resetErrorBoundary}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Reload Page
                </button>
                <div className="mt-6 text-center">
                    <p className="text-md text-gray-600">Why do programmers prefer dark mode?</p>
                    <p className="text-md text-gray-600">Because light attracts bugs!</p>
                </div>
            </div>
        </div>
    );
}

export default ErrorFallback;
