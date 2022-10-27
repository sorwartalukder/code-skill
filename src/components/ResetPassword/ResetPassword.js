import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ResetPassword = () => {
    const [error, setError] = useState(null)
    const { resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleResetPassword = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        setError(null)
        resetPassword(email)
            .then(() => {
                toast.success('check inbox and spam box')
                navigate('/login')
            }).catch((error) => {
                console.error(error)
                setError('Wrong Email, Please enter right email')
            });
    }
    return (
        <div className='login-container text-center my-5  shadow-lg p-3  bg-body rounded ' >
            <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='text-center' name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Reset Password
                </Button>
            </Form>
        </div>
    );
};

export default ResetPassword;