import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                console.error(error)
            });
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='py-2'>
                <h2> <Link className='text-decoration-none' to='/'>Code Skill</Link></h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='me-2 text-decoration-none' to='/courses'>Courses</Link>
                        <Link className='me-2 text-decoration-none' to='/blog'>Blog</Link>

                    </Nav>
                    {
                        user?.uid ?
                            <button onClick={handleLogOut} className='btn btn-outline-primary me-2'>Log Out</button>
                            :
                            <> <Link className='me-2 text-decoration-none' to='/login'>Login</Link>
                                <Link className='me-2 text-decoration-none' to='/register'>Register</Link></>
                    }


                    {
                        user?.uid ?
                            <Image roundedCircle src={user?.photoURL} style={{ height: '40px' }} title={user.displayName}>
                            </Image>
                            :
                            <FaUserAlt className='text-white'></FaUserAlt>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;