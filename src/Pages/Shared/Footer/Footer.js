import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import { FaHome, FaFacebookF, FaGooglePlusG, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <Container className="">
                <Row className="py-5">
                    <Col md={6} className=" text-start">
                        <h2>HealthCare</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit, quasi rerum sunt aspernatur quas mollitia ea ut sapiente optio laudantium, harum quidem ipsam amet non at explicabo dolorem quod.</p>
                    </Col>
                    <Col md={3} className="socialMedia">
                        <h2>Social Media</h2>
                        <div className="d-flex justify-content-center social-icon">
                            <div className="icon">
                                <p><FaFacebookF /></p>
                                <p><FaGooglePlusG /></p>
                                <p><FaTwitter /></p>
                                <p><FaLinkedinIn /></p>
                            </div>
                            <div className="icon-text">
                                <p>Facebook</p>
                                <p>Google+</p>
                                <p>Twitter</p>
                                <p>Linkedin</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} className="">
                        <h2>Find Us</h2>
                        <div className="d-flex justify-content-evenly social-icon">
                            <div className="icon">
                                <p><FaHome /></p>
                                <br />
                                <br />
                                <p><BsFillEnvelopeFill /></p>
                                <p><BsFillTelephoneFill /></p>
                            </div>
                            <div className="icon-text">
                                <p>143 Gordon Terrace Embarrassing NG33 0ZT
                                    United Kingdom</p>
                                <p>info@healthcare.com</p>
                                <p>++0999888</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="py-4 footer-bootom">
                    <p className="">Copyright © 2021 HealthCare.com</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;