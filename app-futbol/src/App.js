import React from "react";
import {Provider} from "react-redux";
import Equipo from "./components/Equipo";
import Jugadores from "./components/Jugadores";
import store from "./store";
import "./styles/styles.css"
const App = () => (
  <div className="App">
    <Provider store={store}>
    <main className="Main">
      <h1 className="titulo"> EdManager</h1>
      <Jugadores />
      <Equipo />
    </main>
    </Provider>
  </div>
)
export default App;
