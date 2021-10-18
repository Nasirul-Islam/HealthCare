import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FaClock } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";


const Navigation = () => {
    return (
        <>
            <div className="nav-top">
                <Container>
                    <Row>
                        <Col lg={6} className="d-flex justify-content-start">
                            <p> <span><FaClock /></span> Opening Hours : 8.00 AM - 5.00 PM ( Sat - Thu )</p>
                        </Col>
                        <Col lg={6} className="d-flex justify-content-end">
                            <p> <span><BsFillTelephoneOutboundFill /></span> Phone : +(0321) 752 8659</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                <Container className="navigation">
                    <Navbar.Brand href="#home">
                        <h1>HealthCare</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
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
                                <Link to="/login">Log In</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Link to="/blog">Log Out</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;