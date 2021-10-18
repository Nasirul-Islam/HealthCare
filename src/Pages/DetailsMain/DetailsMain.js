import React from 'react';

const DetailsMain = (props) => {
    const { img } = props.service
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default DetailsMain;