import React, { useState, useEffect } from "react";
// Context
import { useDentiStates } from "./utils/global.context.jsx";
// Router
import { Link } from 'react-router-dom';
// Styles
import '../index.css'


const Card = ({ data }) => {

  // traigo context
  const { dentiState, dentiDispatch } = useDentiStates();

  // funcion addFav para boton
  const addFav = () => {
    console.log(dentiState.denti);
    // Aqui iria la logica para agregar la Card en el localStorage
    dentiDispatch({type: "FAVS", payload: dentiState.denti});
    console.log(dentiState.favs);
  }

  return (

    <div className="card">

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/dentist/${data.id}`} key={data.id}>

          <div className="card-flex">

            <div>
            
              {/* En cada card deberan mostrar en name - username y el id */}
              <p>Name: </p>
              <h3> {data.name}</h3>

              <p>Username: </p>
              <h3> {data.username}</h3>

              <p>ID: </p>
              <h3> {data.id}</h3>
              
            </div>

            <div>

              <img src="../../public/images/doctor.jpg" alt="pic" />
            
            </div>
          </div>

        </Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
        
    </div>
  );
};

export default Card;
