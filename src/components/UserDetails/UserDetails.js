import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserDetails = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                console.error(error)
            });
    }
    return (
        <div>
            <Form className='login-container shadow-lg p-3
             rounded mt-5 py-5'>
                <div className='d-md-flex  flex-row-reverse justify-content-between'>
                    <Image className='d-block ms-auto shadow' rounded src={user?.photoURL} style={{ height: '80px' }}></Image>
                    <div>
                        <h5>Name: {user?.displayName}</h5>
                        <p>User ID: {user?.uid}</p>
                        {user?.emailVerified ?
                            <p>Email verify: Verified</p>
                            :
                            <p>Email verify: Not verified</p>
                        }
                        {user?.email ?
                            <p>Email:{user?.email}</p>
                            :
                            <p>Email: </p>
                        }
                        <div>
                            {
                                user?.uid ?
                                    <button onClick={handleLogOut} className='btn btn-primary me-2 my-2 my-lg-0'>Log Out</button>
                                    :
                                    <Link className='me-2 text-decoration-none' to='/login'><button className='btn btn-primary me-2 my-2 my-lg-0'>Log In</button></Link>
                            }
                        </div>

                        <p className='my-4 '>Check Your information</p>
                        <button className='btn btn-primary  py-2 px-4'>Edit</button>
                    </div>

                </div>

            </Form>
        </div>
    );
};

export default UserDetails;