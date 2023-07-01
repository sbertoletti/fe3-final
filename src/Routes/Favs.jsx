import React, { useState, useEffect } from "react";
// Context
import { useDentiStates } from "../Components/utils/global.context";
// Components
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { dentiState } = useDentiStates();
  
  return (
    
    <div className={dentiState.theme}>

      <h1>Dentists Favs</h1>

      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentiState.favs.map(favorito => 
          <Card data={favorito} key={favorito.id} />
          )}
      </div>

    </div>
  );
};

export default Favs;
