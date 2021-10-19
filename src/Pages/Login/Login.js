import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { handleGoogleLogin, handleLoginWithEmail, handleForgetPassword, handleEmail, handlePassword, setIsLoding, errorMessage } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
    const googleLogin = () => {
        handleGoogleLogin()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoding(false))
    }
    return (
        <Container className="login py-4">
            <h2 className="pb-4">
                Login with HealthCare <br /> Account
            </h2>
            <Form className="w-25 m-auto">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <p>{errorMessage}</p>
                <br />
                <Button className="w-100" onClick={handleLoginWithEmail}>
                    Log In
                </Button>
            </Form>
            <h6 className="text-primary py-3">Sign up with just one click</h6>
            <Button className="w-25" onClick={googleLogin}>Login With Google</Button>
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