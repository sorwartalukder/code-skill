import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { Image } from 'react-bootstrap';

const UserDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Form className='login-container shadow-lg p-3 rounded mt-5 py-5'>
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
                        {/* {user?.providerData[0]?.
 
                            <p>Email:{user?.email}</p>
                            :
                            <p>Email: </p>
                        } */}
                    </div>
                </div>

            </Form>
        </div>
    );
};

export default UserDetails;