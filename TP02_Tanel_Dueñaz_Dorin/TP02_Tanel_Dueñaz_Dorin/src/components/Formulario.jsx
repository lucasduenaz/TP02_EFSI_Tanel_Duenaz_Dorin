import "./Formulario.css";
import SectionTitle from "./SectionTitle";
import FormInput from "./FormInput";

function Formulario() {
  return (
    <div className="formulario">
      <SectionTitle level={2}>CREAR MI CITA</SectionTitle>

      <FormInput placeholder="Nombre Mascota" />
      <FormInput placeholder="Nombre dueño de la mascota" />
      <FormInput type="date" />
      <FormInput type="time" />
      <FormInput type="textarea" placeholder="Sintomas" />

      <button>AGREGAR CITA</button>
    </div>
  );
}

export default Formulario;