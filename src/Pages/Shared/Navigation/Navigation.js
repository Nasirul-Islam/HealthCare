import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="navigation">
                    <Navbar.Brand href="#home">
                        HealthCare
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#features">
                            <Link to="/about">About</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <Link to="/blog">Blog</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <Link to="/blog">Log In</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <Link to="/blog">Log Out</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;