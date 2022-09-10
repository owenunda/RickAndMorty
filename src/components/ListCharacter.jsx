import React from 'react';
import { useState, useEffect } from 'react';
import Character from './Character'
import Paginacion from './Paginacion';

const ListCharacter = ({location, isPopulacion}) => {

      // paginacion
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorpagina] = useState(6);
    const maximo = location?.residents?.length / porPagina

    
    return (
        <>
        {   
            isPopulacion ? (
        <>
            <ul className='list-character'>
            {
            location?.residents?.slice(
                ( pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina
            ).map(resident => (
            <div key={resident} className="conteinCard" >
                <Character resident={resident} />
            </div>
            ))
            }
            </ul>
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}  />
        </>
            ) : (   
                <h1>NO EXISTEN PERSONAJES EN ESTA UBICACION</h1>
            )
        }
        
        </>
    );
};

export default ListCharacter;