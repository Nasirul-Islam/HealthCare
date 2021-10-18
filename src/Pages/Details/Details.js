import React from 'react';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';

const Details = () => {
    const { detailsID } = useParams();
    const { allData } = useData();
    console.log(allData)
    return (
        <div>
            <h2>Details {detailsID}</h2>
        </div>
    );
};

export default Details;