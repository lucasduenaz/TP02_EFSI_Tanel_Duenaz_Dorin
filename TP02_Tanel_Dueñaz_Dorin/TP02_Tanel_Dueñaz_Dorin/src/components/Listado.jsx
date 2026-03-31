import Cita from "./Cita";
import SectionTitle from "./SectionTitle";
import "./Listado.css";

function Listado({ citas }) {
  return (
    <div className="listado">
      <SectionTitle level={2}>ADMINISTRA TUS CITAS</SectionTitle>

      {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
    </div>
  );
}

export default Listado;