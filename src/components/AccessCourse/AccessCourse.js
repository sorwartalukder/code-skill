import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';

const AccessCourse = () => {
    const accessCourse = useLoaderData()
    const { user } = useContext(AuthContext);
    // const { displayName, photoURL, uid, email } = user;

    const { price, title, picture } = accessCourse;
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        form.reset()
    }

    return (
        <div className='login-container mt-5'>
            <Form onSubmit={handleSubmit} className='shadow-lg p-3 rounded'>
                <div className='d-md-flex  flex-row-reverse justify-content-between'>
                    <Image className='d-block ms-auto' rounded src={user?.photoURL} style={{ height: '80px' }}></Image>
                    <div>
                        <h5>Name: {user?.displayName}</h5>
                        <p>User ID: {user?.uid}</p>
                    </div>
                </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name='phone' type="phone" placeholder="Phone Number" />
                </Form.Group>
                <div className='d-flex'>
                    <div>
                        <h5>Course Name: {title}</h5>
                        <p className='text-primary fw-semibold'>Price: ${price}</p>
                    </div>
                    <Image rounded src={picture} style={{ width: '80px' }}></Image>
                </div>
                <Button on variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AccessCourse;