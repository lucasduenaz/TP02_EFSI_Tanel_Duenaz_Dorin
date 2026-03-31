import "./Cita.css";
import CitaField from "./CitaField";

function Cita({ cita }) {
  return (
    <div className="cita">
      <CitaField label="Mascota" value={cita.mascota} />
      <CitaField label="Dueño" value={cita.dueño} />
      <CitaField label="Fecha" value={cita.fecha} />
      <CitaField label="Hora" value={cita.hora} />
      <CitaField label="Sintomas" value={cita.sintomas} />

      <button>ELIMINAR ×</button>
    </div>
  );
}

export default Cita;