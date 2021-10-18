import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './TeamMember.css'

const TeamMember = (props) => {
    const { title, description, url, name } = props.service
    return (
        <>
            <Col className="team">
                <Card>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <h3>{name}</h3>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    {/* <Button onClick={handleservicebtn} className="serviceBtn">
                        Details
                    </Button> */}
                </Card>
            </Col>
        </>
    );
};

export default TeamMember;