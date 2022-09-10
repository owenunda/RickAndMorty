import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios"

const useLocation = () => {

     // traer la ubicacion cunado carge la pagina
    const [location , setLocation] = useState({})
    // este estado me dice si hay 0 residentes
    const [isPopulacion, setIsPopulacion] = useState(true)


    useEffect(() =>{
       const random = Math.floor(Math.random() * 20 ) + 1
    axios.get(`https://rickandmortyapi.com/api/location`)
        .then(res =>  {
            setLocation(res.data.results[random])
            if (location?.residents?.length === 0) {
                setIsPopulacion(!isPopulacion)
                }
        })
    },[])  

    // para traer  ubicacion por id
    const [idLocation, setIdLocation] = useState(" ")
    const [isCharacter, setIsCharacter] = useState(true)
    const chageLocation = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/?name=${idLocation}`)
        .then(res => {
            setLocation(res.data.results[0])
            if (location?.residents?.length === 0) {
                setIsPopulacion(!isPopulacion)
                }
        })
        .finally(() => {
            setIsCharacter(!isCharacter)
            if (location?.residents?.length === 0) {
                setIsPopulacion(false)
                }else{
                    setIsPopulacion(true)
                }
        })
    }
    return [location, idLocation, setIdLocation, chageLocation, useEffect,isCharacter, isPopulacion]
};

export default useLocation;