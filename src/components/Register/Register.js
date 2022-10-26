import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault()
        setError(null)
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const profile = { displayName: name, photoURL: photoURL }

        console.log(email, password, photoURL, name)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUserProfile(profile)
                console.log(user)
                navigate('/')

            })
            .catch((error) => {
                console.log(error)
                setError(error.message)
            });
    }

    const handlerAccepted = (event) => {
        setAccepted(event.target.checked)
    }
    return (
        <div className='login-container py-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter  Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handlerAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;