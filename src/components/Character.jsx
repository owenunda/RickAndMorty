import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Character = ({resident}) => {
// el propo residents es la url de cada personaje
    const [Character, setCharacter] = useState({})
    const [isLoading, setIsloading] = useState(true)
    useEffect(() =>{
        axios.get(resident)
        .then( res => setCharacter(res.data))
            .finally(() => setIsloading(!isLoading))
    }, [])


    return (
        <>
        {
            isLoading ? (
                <p className='loading'>loading characters...</p>
            ) : (
                <div className='card-characet' key={resident}>
            <img src={Character.image} alt="" />
            <li className='nameCharacter' > {Character.name}</li><hr />
            <li className='originCharacter'> <b>origin</b><br /><span>{Character.origin?.name}  </span></li>
            <li className='episodesCharacer'> <b>episodes where it appears</b><br /> <span> {Character.episode?.length} </span></li>
            <li className='statusCharacter'> <b>status</b><br /> <span style={{
            color: Character.status === "Alive" ? ("green"
            ) : Character.status === "Dead" ?(
                "red"
            ) :(
                "lightgray"
            ) }}>{Character.status}  </span></li>
        </div>

            )
        }
        </>
        );
};

export default Character;