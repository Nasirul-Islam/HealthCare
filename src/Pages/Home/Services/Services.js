import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import SingleServices from '../SingleServices/SingleServices';
import './Services.css';

const Services = () => {
    const { allData } = useData();
    return (
        <Container className="py-5">
            <h2 className="pb-5 fw-bolder">Our Services</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    allData?.services?.map(service => <SingleServices
                        key={service.id}
                        service={service}
                    ></SingleServices>)
                }
            </Row>
        </Container>
    );
};

export default Services;