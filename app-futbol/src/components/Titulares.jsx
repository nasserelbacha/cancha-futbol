import React from "react"
import { connect } from "react-redux"
import cancha from "../cancha-dimensiones-futbol.jpg"
import "./estilos/Titulares.css"
const Titulares = ({titulares, QuitarTitular}) =>(
    <section>
        <h2> Titulares </h2>
    <div className="cancha">
        {
            titulares.map(j => (
                <article className="titular" key= {j.id}> 
                    <div>
                       <button onClick={() => QuitarTitular (j)}>X</button>
                    </div>
                    <p> {j.nombre}</p>
                </article>
            ))
        }
        <img src={cancha} alt ="cancha"/>
    </div>
    </section>
)
const mapStateToProps = state => ({
    titulares : state.titulares
})
const MapDispatchToProps = dispatch => ({
    QuitarTitular(jugador){
        dispatch ({
            type:"QUITAR_TITULAR",
            jugador
        })
    }
})
export default connect(mapStateToProps, MapDispatchToProps) (Titulares)