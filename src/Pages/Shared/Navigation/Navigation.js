import React from 'react';
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FaClock } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, handlelogOut } = useAuth();
    return (
        <>
            <div className="nav-top">
                <Container>
                    <Row>
                        <Col md={6} className="d-flex justify-content-start">
                            <p> <span><FaClock /></span> Opening Hours : 8.00 AM - 5.00 PM ( Sat - Thu )</p>
                        </Col>
                        <Col md={6} className="d-flex justify-content-end">
                            <p> <span><BsFillTelephoneOutboundFill /></span> Phone : +(0321) 752 8659</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container className="navigation">
                    <Navbar.Brand href="#home">
                        <h1>HealthCare</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav>
                                <Link to="/home">Home</Link>
                            </Nav>
                            <Nav>
                                <Link to="/team">Team</Link>
                            </Nav>
                            <Nav>
                                <Link to="/contact">Contact</Link>
                            </Nav>
                            {!user?.email ?
                                <Nav>
                                    <Link to="/login">Log In</Link>
                                </Nav>
                                :
                                <>
                                    <Nav>
                                        <span>Signed in as: {user?.displayName}</span>
                                    </Nav>
                                    <Button onClick={handlelogOut} className="logOutBtn">
                                        Log Out
                                    </Button>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;