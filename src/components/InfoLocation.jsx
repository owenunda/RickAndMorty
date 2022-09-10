import React from 'react';

const InfoLocation = ({location}) => {
    // este componente es la informacion del la ubicacion 
    return (
        <div className='InfoLocation'>
            <h1> {location?.name} </h1>
            <p><b>type:</b> {location?.type} </p>
            <p><b>dimension:</b> {location?.dimension} </p>
            <p><b>population:</b> {location.residents?.length} </p>
        </div>
    );
};

export default InfoLocation;