import React, { useState } from "react";
// Contexts
import { useDentiStates } from '../Components/utils/global.context';
// Styles
import '../index.css'


const Form = () => {

  const { dentiState } = useDentiStates();
  //Aqui deberan implementar el form completo con sus validaciones


  const [ form, setForm ] = useState({
    name: '',
    mail: '',
    comment: '',
  })


  const [ valid, setValid ] = useState({
    validName: false,
    validMail: false,
    visibility: "hidden",
  })
  

  const estandarizador = () => {
    const userStd = form.name.trim();
    const passStd = form.mail.trim();
    const commStd = form.comment.trim();
    setForm((prevData) => ({...prevData, name: userStd}));
    setForm((prevData) => ({...prevData, mail: passStd}));
    setForm((prevData) => ({...prevData, comment: commStd}));
  };


  // expresion regular para validar mail
  const regex = new RegExp(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/);

  const validateInput = () => {
    estandarizador();

    if ( form.name.length < 6 ){

      console.log("name invalid");

    } else {

      setValid((prevData) => ({...prevData, validName: true}));
    };

    if ( regex.test(form.mail) ){

      setValid((prevData) => ({...prevData, validMail: true}));

    } else {

      console.log("mail invalid");

    }

    setValid((prevData) => ({...prevData, visibility: "visible"}));

    localStorage.setItem('comment', JSON.parse(form));
};



  const resetForm = () => {
    setForm((prevData) => ({...prevData, mail: '', name: '', comment: ''}))
  };

return (
    <>

      <form className={dentiState.theme} >

        <input type="mail" onChange={(e) => setForm((prevData) => ({...prevData, mail: e.target.value}))} placeholder="Ingrese su mail aqui"/>
        
        <div className={valid.visibility}>
          { valid.validMail ? <p style={{color: "green"}}>Formato valido</p> : <p style={{color: "red"}}>Formato invalido, por favor ingrese nuevamente</p>}
        </div>
        
        <input type="text" onChange={(e) => setForm((prevData) => ({...prevData, name: e.target.value}))} placeholder="Ingrese su nombre aqui" />
        
        <div className={valid.visibility}>
          { valid.validName ? <p style={{color: "green"}}>Formato valido</p> : <p style={{color: "red"}}>Formato invalido, por favor ingrese nuevamente</p>}
        </div>

        <input type="text" onChange={(e) => setForm((prevData) => ({...prevData, comment: e.target.value}))} placeholder="Escriba aqui su comentario"/>

  
        <button className="button" onClick={validateInput}>Enviar</button>

        <button className="button" onClick={resetForm}>Reset Search</button>
        
      </form>

    </>
  );
};

export default Form;
