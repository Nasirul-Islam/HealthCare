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
                        <p>Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.Aenean facilisis sodales est neciMorbi vitapurus on Est facilisisro convallis commodo velante, tiam ltricies lputate.</p>
                        <Button className="rounded-pill bannerBtn">Get Started</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;