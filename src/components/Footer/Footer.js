import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-dark text-white mt-5 py-5'>
            <div className='container d-md-flex  justify-content-between '>
                <h1 className='mb-4'>Code Skill</h1>
                <address>
                    <h3>Address</h3>
                    <p className='m-0'><small>House: 01, Road: 12, Uttara</small></p>
                    <p><small>Dhaka, Banglades</small></p>
                </address>
            </div>
        </footer>
    );
};

export default Footer;