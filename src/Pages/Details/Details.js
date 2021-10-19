import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import DetailsMain from '../DetailsMain/DetailsMain';

const Details = () => {
    const { detailsID } = useParams();
    const [allData, setAllData] = useState({});

    useEffect(() => {
        fetch("/appData.json")
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    const result = allData?.services?.filter(service => service.id == detailsID)
    console.log(result)
    console.log(detailsID)
    return (
        <Container>
            {
                result?.map(service => <DetailsMain
                    key={service.id}
                    service={service}
                ></DetailsMain>)
            }
        </Container>
    );
};

export default Details;