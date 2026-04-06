import Cita from "./Cita";

function Listado({ citas, eliminarCita }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>

      {citas.length === 0 ? (
        <p style={{ color: "white" }}>No hay citas</p>
      ) : (
        citas.map((cita, index) => (
          <Cita
            key={index}
            cita={cita}
            index={index}
            eliminarCita={eliminarCita}
          />
        ))
      )}
    </div>
  );
}

export default Listado;