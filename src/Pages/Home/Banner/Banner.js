import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col md={5}></Col>
                    <Col md={7}>
                        <h1 className="fw-bold heading">Book Online For
                            <br /> Doctor's <br /> Appointment</h1>
                        <p>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</p>
                        <Button className="rounded-pill bannerBtn">Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;