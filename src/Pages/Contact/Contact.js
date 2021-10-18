import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import worldMap from '../../images/worldmap.png';
import './Contact.css'

const Contact = () => {
    return (
        <Container className="py-5 contact">
            <h2 className="text-success fw-bold pb-4">Contact us</h2>
            <Row>
                <Col md={6} className="text-start">
                    <div className="">
                        <h1 className="fw-bolder pb-3">Get In Touch</h1>
                    </div>
                    <div className="">
                        <img src={worldMap} className="img-fluid" alt="" />
                    </div>
                </Col>
                <Col md={6} className="">
                    <Form className="text-start">
                        <Form.Group className="mb-4 fw-bold" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="my-4 fw-bold" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your Email address" />
                        </Form.Group>
                        <Form.Group className="my-4 fw-bold" controlId="exampleForm.ControlInput1">
                            <Form.Label>Contact No.</Form.Label>
                            <Form.Control type="email" placeholder="Your Contact No" />
                        </Form.Group>
                        <Form.Group className="my-4 fw-bold " controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="rounded-pill contactBtn">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;