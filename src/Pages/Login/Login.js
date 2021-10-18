import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { handleGoogleLogin, handleLoginWithEmail, handleForgetPassword } = useAuth();
    return (
        <Container className="login py-4">
            <h2 className="pb-4">
                Login with HealthCare <br /> Account
            </h2>

            <Form className="w-25 m-auto">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br />
                <Button className="w-100" onClick={handleLoginWithEmail}>
                    Log In
                </Button>
            </Form>
            <h6 className="text-primary py-3">Sign up with just one click</h6>
            <Button className="w-25" onClick={handleGoogleLogin}>Login With Google</Button>
            <br />
            <br />
            <Button variant="warning" className="w-25" onClick={handleForgetPassword}>Forget Password</Button>
            <br />
            <br />
            <Link className="text-warning registerLink" to="/register">New to HealthCare? Please Register</Link>
        </Container>
    );
};

export default Login;