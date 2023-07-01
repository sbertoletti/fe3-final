import React, { useEffect, useState } from 'react';
// axios
import axios from 'axios';
// Components
import Card from '../Components/Card';
// Context
import { useDentiStates } from '../Components/utils/global.context';
// Router
import { Link, useParams } from 'react-router-dom'
// Styles
import '../index.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {

  // traigo context
  const { dentiState, dentiDispatch } = useDentiStates();

  // traigo useParams
  const params = useParams();
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  
  useEffect(() => {
    axios(url)
    .then(res => dentiDispatch({type: "DENTISTA", payload: res.data}))
  }, []);

  
  return (
    <>
      
      <div className={`"detail-card ${dentiState.theme}`}>
      
        <section>
        
          <h1>Detail Dentist id </h1>
          {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
          {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
          
          <p>Name: </p>
          
          <h2>{dentiState.denti.name}</h2>
          
          <p>email: {dentiState.denti.email}</p>
          
          <p>Phone: {dentiState.denti.phone}</p>
          
          <p>Website: <Link to={`https://www.${dentiState.denti.website}`} target="_blank" >{dentiState.denti.website}</Link></p>
        
        </section>
        
        <img src='../../public/images/doctor.jpg' alt="pic" />
      
      </div>
    
    </>
  )
}

export default Detail