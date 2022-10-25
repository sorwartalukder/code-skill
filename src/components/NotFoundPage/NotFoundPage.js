import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='container  w-50 text-center my-5  text-danger shadow-lg p-3  bg-body rounded ' >
            <h1 style={{ fontSize: '5em' }}>404</h1>
            <p className='m-0'>You didn't break the internet, but we can't find what you are looking for.</p>
            <p>Please enter right URL</p>
        </div>
    );
};

export default NotFoundPage;