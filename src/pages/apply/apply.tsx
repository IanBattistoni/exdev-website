import './apply.css';
import { postularUsuario } from './services/applyService';

function Apply() {
  const handleEnviar = () => {
    const datos = {
      nombre_completo: "Ana Pérez Soto",
      rut: "20123456-6",
      edad: 21,
      correo_institucional: "ana.perez8@utem.cl",
      campus: "Campus Ñuñoa",
      carrera: "21041 Ingeniería Civil en Computación Mención Informática",
      anio_ingreso: 2022,
      anio_actual: 4,
      area_interes1: "Backend",
      area_interes2: "Data Science",
      area_interes3: null,
      ayudantias: "Ayudante en Programación I, me gustaría en otras asignaturas también.",
      horas_disponibles_semanales: 6,
      motivo_postulacion: "Quiero participar en proyectos reales y colaborar en equipo.",
      proyecto_idea: "Tengo en mente una app para gestión de mentorías entre ramos.",
      portafolio: "https://github.com/anaperez",
      postulacion_conjunta: null,
      pitch: "Curiosa, constante y motivada por aprender nuevas tecnologías.",
      apodo: "Ana"
    };

    postularUsuario(datos);
  };

  return (
    <div>
      <h1>Formulario Test</h1>
      <button onClick={handleEnviar}>Enviar Datos</button>
    </div>
  );
}

export default Apply;