import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios"

const InputCharacter = ({chageLocation, idLocation, setIdLocation }) => {
    // esto me traer toda las localizaciones y me las coloca en el input como una opcion para escoger
    const [locationAll, setLocationAll] = useState([])
        useEffect(() =>{
            axios.get(`https://rickandmortyapi.com/api/location`)
    .then(res => setLocationAll(res.data.results))
        }, [])
    return (
        <div className='input-location'>
        <input list='location' placeholder='write the id of the location, example: 1'  type="text" value={idLocation} onChange={e => setIdLocation(e.target.value)}  />
        <datalist id='location'>
            {
                locationAll.map(location =>(
                    <option key={location.name} value={location.name}></option>
                    ))
            }
        </datalist>
        <button onClick={chageLocation} >Search</button>
        </div>
    );
};

export default InputCharacter;