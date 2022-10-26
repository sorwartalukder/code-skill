import React, { useState } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const [error, setError] = useState(null)
    const { login, googleLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();;

    const handleLogin = event => {
        event.preventDefault()
        setError(null)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            });
    }

    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                console.error(error)
            });
    }
    return (
        <div className='login-container py-5'>
            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Link className='text-decoration-none'>Forgotten password?</Link>

            <button onClick={handleGoogleLogin} className='btn btn-outline-success d-block mt-3 fw-bold py-2 px-3'>Login with Google</button>


            <button className='btn btn-outline-primary d-block mt-1 fw-bold py-2 px-3'>Login with Github</button>

            <Link className='d-block mt-5 ' to='/register'>
                <button className='btn btn-success fw-bold py-2 px-3'>Create New Account</button>
            </Link>
        </div>
    );
};

export default Login;