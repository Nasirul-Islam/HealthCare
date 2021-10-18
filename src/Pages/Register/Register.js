import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegisterWithEmail, handleGoogleLogin, handleEmail, handlePassword } = useAuth();
    return (
        <Container className="login py-4">
            <h2 className="pb-4">
                Register in HealthCare
            </h2>

            <Form className="w-25 m-auto">
                <Form.Group className="mb-4" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupPassword">
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Enter Password" />
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