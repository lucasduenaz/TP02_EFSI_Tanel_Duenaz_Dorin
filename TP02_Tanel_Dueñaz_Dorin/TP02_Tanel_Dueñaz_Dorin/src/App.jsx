import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    setCitas(citas.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          <Formulario agregarCita={agregarCita} />
          <Listado citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </>
  );
}

export default App;