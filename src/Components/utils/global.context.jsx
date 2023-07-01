import { createContext, useContext, useState, useReducer, useEffect } from "react";
// Axios
import axios from 'axios';

// declaro el Context
// uso export porque está fuera de scope
export const DentiStates = createContext();

// declaro los estados iniciales
// uso export porque está fuera de scope
export const initialDentiState = {
    dentiList: [],
    denti: {},
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    theme: 'light'
}

// declaro el reducer
const dentiReducer = (state, action) => {
    switch (action.type) {
        case "LISTA":
            return {...state, dentiList: action.payload}; // siempre declarar primero el ...state, luego el payload, no me funcionaba porque lo tenía al revés
        case "DENTISTA":
            return {...state, denti: action.payload};
        case "FAVS":
            return {...state, favs: [...state.favs, action.payload]}; // paso el acumulado de los demás favs
        case "THEME":
            return {...state, theme: action.payload};
        default:
            throw new Error();
    }
};


// hago el Context
const Context = ({children}) => {

    // useReducer
    const [ dentiState, dentiDispatch ] = useReducer(dentiReducer, initialDentiState);

    // llamo a la api para listar
    const urlList = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        axios(urlList)
        .then(res => dentiDispatch({type: "LISTA", payload: res.data}))
    }, [])

    /* No me funciona */
    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(dentiState.favs))
    }, [dentiState.favs])

    // Retorno el provider
    return (
        <DentiStates.Provider value={{
            dentiState, dentiDispatch
        }}>
            {children}
        </DentiStates.Provider>
    )

}

// exporto Context y funcion useContext
export default Context;
export const useDentiStates = () => useContext(DentiStates);