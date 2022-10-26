import React from 'react';
import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PriveteRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return (
            <Spinner className='d-block mx-auto text' animation="border" variant="warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PriveteRoute;