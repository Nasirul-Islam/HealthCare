import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import TeamMember from '../TeamMember/TeamMember';
import './Team.css'

const Team = () => {
    const { allData } = useData();
    return (
        <Container className="py-5">
            <h3 className="pb-3 fw-bolder text-success">Doctors Team</h3>
            <h2 className="pb-5 fw-bolder">We Are Happy To Help You</h2>
            <Row xs={1} md={3} className="g-5">
                {
                    allData?.services?.map(service => <TeamMember
                        key={service.id}
                        service={service}
                    ></TeamMember>)
                }
            </Row>
        </Container>
    );
};

export default Team;