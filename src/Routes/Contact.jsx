import React from 'react'
// Components
import Form from '../Components/Form'
// Context
import { useDentiStates } from '../Components/utils/global.context'
// Styles
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { dentiState } = useDentiStates();

  return (
    <div className={dentiState.theme}>

      <div className="contact-form">
      
        <h2>Want to know more?</h2>
      
        <p>Send us your questions and we will contact you</p>
      
        <Form/>
      
      </div>
      
    </div>
  )
}

export default Contact