//import React, { useState, useEffect } from 'react';
//axios
//import axios from 'axios';
//Components
import Card from '../Components/Card';
// Contexts
import { useDentiStates } from '../Components/utils/global.context';
// Router
//import { Link } from 'react-router-dom';
// Styles
//import styles from '../Styles/style.module.css';
import '../index.css';




const Home = () => {

  // llamo al context y reducer
  const {dentiState} = useDentiStates();

  return (
    <main className={dentiState.theme} >
    {/*//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context*/}

      <h1>Home con reducer</h1>
      
      <div className='wrapper'>

        {/* Aqui deberias renderizar las cards */}
        {dentiState.dentiList.map(item =>
          <Card data={item} key={item.id}/>
        )}

      </div>
    
    </main>
  )
}

export default Home