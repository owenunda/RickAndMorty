import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import useLocation from './hooks/useLocation'
import InputCharacter from './components/InputCharacter'
import ListCharacter from './components/ListCharacter'
import InfoLocation from "./components/InfoLocation"

function App() {
    // esto me importa la api de la ubicacion
    
    const [location,  idLocation, setIdLocation, chageLocation, useEffect, isCharacter, isPopulacion] = useLocation()
    useEffect
    /*
    en el useLocation estan las get de la api, NOSE si sea buena practica traer las id y las funciones y hasta el useEffect 
    pero me parecio mas legible de esa manera JAJAJJAJ
    */

    /*
    mi intencion es que todo este separado por componentes para que en el APP no este llena de funcionalidades y que solo esten los componentes importados y los hooks que sean necesarios y el unico en estecaso es el de la ubicacion que estoy importando practicamente todo ps todo se necesita
    */
    
  

  return (
    <div className="App">
      <div className='header'>
      <img className='img-portada' src="./src/assets/recursos/la-ultima-cena-de-rick-y-morty_3840x2160_xtrafondos.com.jpg" alt=""></img>
        <InputCharacter chageLocation={chageLocation} idLocation={idLocation} setIdLocation={setIdLocation} />
      </div>
      <div className='main'>
        <InfoLocation location={location} />
        <ListCharacter isPopulacion={isPopulacion} location={location} />
      </div>
    </div>
  )
}


export default App
