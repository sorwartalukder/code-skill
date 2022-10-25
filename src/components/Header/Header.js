import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className='py-2'>
                <h2> <Link className='text-decoration-none' to='/'>Code Skill</Link></h2>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='me-2 text-decoration-none' to='/courses'>Courses</Link>
                        <Link className='text-decoration-none' to='/blog'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        <Nav.Link href="#deets">{user.name}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;