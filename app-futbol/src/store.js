import {createStore} from "redux";
const initialState = {
    jugadores: [{
        id: 1,
        nombre: "nasser",
    },{
        id: 2,
        nombre: "bruno",
    },{
        id:3,
        nombre: "fane",
    },{
        id: 4, 
        nombre: "Toto"
    }, {
        id: 5,
        nombre: "Pocho"
    },{
        id:5,
        nombre: "Valentin"
    }
],
    titulares: [],
    suplentes: []
}
const reducer = (state = initialState, action ) => {
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id)
            ,jugadores: state.jugadores.concat(action.jugador)
        }
    }
    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id)
            , jugadores: state.jugadores.concat(action.jugador)
        }

    }
    return state 
}
export default createStore( reducer )