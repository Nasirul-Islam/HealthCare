import React, { useEffect, useState } from 'react';
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
    return (
        <div>
            <h2>Details {detailsID}</h2>
            {
                allData?.services?.map(service => <DetailsMain
                    key={service.id}
                    service={service}
                ></DetailsMain>)
            }
        </div>
    );
};

export default Details;