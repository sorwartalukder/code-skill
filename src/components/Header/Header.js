import React, { useState } from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Image, InputGroup } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaLightbulb, FaRegMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [darkMode, setDarkMode] = useState(true)
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                console.error(error)
            });
    }

    const handleClick = () => {
        setDarkMode(true)
        if (darkMode) {
            setDarkMode(false)
        }
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
                    <div>
                        {
                            user?.uid ?
                                <button onClick={handleLogOut} className='btn btn-outline-primary me-2 my-2 my-lg-0'>Log Out</button>
                                :
                                <>
                                    <Link className='me-2 text-decoration-none' to='/login'>Login</Link>
                                    <Link className='me-2 text-decoration-none d-block d-lg-inline' to='/register'>Register</Link>
                                </>
                        }
                    </div>
                    <div>
                        <button className='btn btn-outline-primary me-2'
                            onClick={handleClick}
                        >
                            {darkMode ? <FaSun></FaSun> : <FaRegMoon></FaRegMoon>}
                        </button>
                    </div>

                    <div className='mt-2 mt-lg-0'>
                        {
                            user?.uid ?
                                <Link to='/user/details'><Image roundedCircle src={user?.photoURL} style={{ height: '40px' }} title={user.displayName}>
                                </Image></Link>
                                :
                                <FaUserAlt className='text-white'></FaUserAlt>
                        }
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;