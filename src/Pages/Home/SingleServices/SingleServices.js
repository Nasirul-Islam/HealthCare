import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleServices.css';
import { useHistory } from 'react-router';

const SingleServices = (props) => {
    const { title, description, img, id } = props.service
    const url = `/details/${id}`
    const history = useHistory()
    const handleservicebtn = () => {
        history.push(url)
    }
    return (
        <>
            <Col className="service">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)}...
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={handleservicebtn} className="serviceBtn">
                        Details
                    </Button>
                    {/* <Link to={url}>Details</Link> */}
                </Card>
            </Col>
        </>
    );
};

export default SingleServices;