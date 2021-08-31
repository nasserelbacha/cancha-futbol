import React from "react"
import { connect } from "react-redux"
const Suplentes = ({suplentes, QuitarSuplente}) =>(
    <section>
        <h2> suplentes </h2>
    <div className="suplentes">
        {
            suplentes.map(j => (
                <article className="suplente" key={j.id}> 
                    <div>
                       <button onClick={() => QuitarSuplente (j)}>X</button>
                    </div>
                    <p> {j.nombre}</p>
                </article>
            ))
        }
    </div>
    </section>
)
const mapStateToProps = state => ({
    suplentes : state.suplentes
})
const MapDispatchToProps = dispatch => ({
    QuitarSuplente(jugador){
        dispatch({
            type:"QUITAR_SUPLENTE",
            jugador
        })
    }
})
export default connect(mapStateToProps, MapDispatchToProps) (Suplentes)