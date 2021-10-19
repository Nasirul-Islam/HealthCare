import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './DetailsMain.css'

const DetailsMain = (props) => {
    const { img, url, name, title, description } = props.service
    console.log(props.service)
    return (
        <>
            <Row className="py-5 detailsMain">
                <Col md={6}>
                    <Card className="doctor">
                        <Card.Img className="doctorImg m-auto img-fluid" variant="top" src={url} />
                        <Card.Body>
                            <h6>{name}</h6>
                            <Card.Title>{title} Specialist</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <Button className="serviceBtn">Contact</Button>
                    </Card>
                </Col>
                <Col md={6}>
                    <img width="100%" className="doctorBanner img-fluid" src={img} alt="" />
                </Col>
            </Row>
        </>
    );
};

export default DetailsMain;