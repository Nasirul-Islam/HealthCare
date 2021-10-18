import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegisterWithEmail, handleGoogleLogin } = useAuth();
    return (
        <Container className="login py-4">
            <h2 className="pb-4">
                Register in HealthCare
            </h2>

            <Form className="w-25 m-auto">
                <Form.Group className="mb-4" controlId="formGroupEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button className="w-100" onClick={handleRegisterWithEmail}>
                    Register
                </Button>
            </Form>
            <h6 className="text-primary py-3">Sign up with just one click</h6>
            <Button className="w-25" onClick={handleGoogleLogin}>Login With Google</Button>
            <br />
            <br />
            <Link className="text-success registerLink" to="/login">
                Already have an account? Please Login
            </Link>
        </Container>
    );
};

export default Register;