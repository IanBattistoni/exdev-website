import "./apply.css";
import { useState, useRef } from "react";

const preguntas = [
  {
    pregunta: "¿Solo pueden postular estudiantes de Ingeniería en Informática?",
    respuesta:
      "No, cualquier persona interesada en realizar proyectos de innovación puede unirse al club, independientemente de su carrera. Lo importante es tener ganas de aprender, colaborar y aportar con ideas creativas.",
  },
  {
    pregunta: "¿Necesito tener experiencia previa para ingresar al club?",
    respuesta:
      "No es necesario contar con experiencia previa. Nuestro objetivo es que los integrantes crezcan y se desarrollen dentro del club. Lo que más valoramos son las ganas de participar y comprometerse con las actividades.",
  },
];


function Apply() {
        
  //Drop zone//
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Abrir el selector al hacer click en el botón
  const handleClick = () => {
    inputRef.current?.click();
  };

  // Manejo de archivos seleccionados
  const handleFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  // Evento cuando seleccionas archivo manualmente
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  // Arrastrar y soltar
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

      // Estado para preguntas frecuentes
  const [abiertas, setAbiertas] = useState<number[]>([]);

  const togglePregunta = (index: number) => {
    if (abiertas.includes(index)) {
      setAbiertas(abiertas.filter((i) => i !== index));
    } else {
      setAbiertas([...abiertas, index]);
    }
  };


// Selectores

const [carrera, setCarrera] = useState("");
const [anioIngreso, setAnioIngreso] = useState("");
const [anioMalla, setAnioMalla] = useState("");
const [disponibilidad, setDisponibilidad] = useState("");

 // CAMPOS DE TEXTO
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [rut, setRut] = useState("");
  const [correo, setCorreo] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");

 // Otro campo
  const [otroChecked, setOtroChecked] = useState(false);
  const [otroTexto, setOtroTexto] = useState("");

 // Áreas seleccionadas
  const [areasSeleccionadas, setAreasSeleccionadas] = useState<string[]>([]);
  const areas = [
  "Frontend",
  "Backend",
  "Aplicaciones móviles",
  "Robótica",
  "Inteligencia Artificial",
  "Diseño",
  "Videojuegos",
  "UX/UI",
  "Fotografía",
  "Desarrollo web",
  "Machine Learning",
  "Base de datos",
  "Modelado 3D",
  "Ilustración",
  "Carpintería",
  "Community Manager",
  "Electrónica",
  "Edición de video",
  "Ciberseguridad",
  "Otro",
  ];

const selectCarrera = (valor: string) => setCarrera(valor);
const selectAnioIngreso = (valor: string) => setAnioIngreso(valor);
const selectAnioMalla = (valor: string) => setAnioMalla(valor);
const selectDisponibilidad = (valor: string) => setDisponibilidad(valor);

 // Handlers de inputs
    const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let valor = e.target.value
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '')
    .replace(/\s{2,}/g, ' ');

  if (valor.trim().split(/\s+/).length > 4) {
    valor = valor.trim().split(/\s+/).slice(0, 4).join(' ');
  }

  setNombre(valor);
};

// edad//
const handleEdadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const valor = e.target.value.replace(/\D/g, '').slice(0, 2);
  setEdad(valor);
};

//rut//
const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let raw = e.target.value.replace(/\D/g, '');
  if (raw.length > 9) raw = raw.slice(0, 9);
  let formatted = raw.length > 1
    ? raw.slice(0, raw.length - 1) + '-' + raw.slice(-1)
    : raw;
  formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  setRut(formatted);
};

//correo//
const handleCorreoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let valor = e.target.value.toLowerCase();
  valor = valor.replace(/[^a-z.@]/g, ""); // solo letras, puntos y @
  setCorreo(valor);
};

// Validar solo al enviar
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!/^[a-z.]+@utem\.cl$/.test(correo)) {
    setErrorCorreo("El correo debe tener el formato usuario@utem.cl (solo letras y puntos antes del @)");
    return;
  }

  setErrorCorreo("");
  alert("Formulario enviado correctamente ✅");
};


const handleAreaChange = (area: string) => {
  let nuevas = [...areasSeleccionadas];

  if (nuevas.includes(area)) {
    // Si ya estaba seleccionada, quitar
    nuevas = nuevas.filter(a => a !== area);

    if (area === "Otro") {
      setOtroChecked(false);
      setOtroTexto("");
    }
  } else {
    // Si no estaba seleccionada, agregar
    nuevas.push(area);

    // Si supera 3, quitar la primera seleccionada
    if (nuevas.length > 3) {
      const primera = nuevas.shift(); // quita la primera
      if (primera === "Otro") {
        setOtroChecked(false);
        setOtroTexto("");
      }
    }

    if (area === "Otro") {
      setOtroChecked(true);
    }
  }

  setAreasSeleccionadas(nuevas);
};

  // mas compañeros//
const [nombresMas, setNombresMas] = useState("");
const handleNombresMasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  let valor = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\-\s]/g, '')
                             .replace(/\-+/g, '-')
                             .replace(/\s{2,}/g, ' ');
  setNombresMas(valor);
};


//VALIDACION FORMULARIO//
const validarFormulario = () => {
  // Campos simples
  if (!nombre.trim()) return { valido: false, campo: "nombre" };
  if (!rut.trim()) return { valido: false, campo: "rut" };
  if (!edad.trim()) return { valido: false, campo: "edad" };
  if (!correo.trim()) return { valido: false, campo: "correo" };

  // Botones selector
  if (!carrera) return { valido: false, campo: "carrera" };
  if (!anioIngreso) return { valido: false, campo: "anioIngreso" };
  if (!anioMalla) return { valido: false, campo: "anioMalla" };
  if (!disponibilidad) return { valido: false, campo: "disponibilidad" };

  // Áreas de interés
  if (areasSeleccionadas.length !== 3) {
    return { valido: false, campo: "areas", mensaje: "Debes seleccionar exactamente 3 áreas" };
  }

  // Aquí puedes seguir validando textareas o archivos si quieres

  return { valido: true };
};



// Estado para abrir/cerrar cada selector
const [carreraOpen, setCarreraOpen] = useState(false);
const [anioIngresoOpen, setAnioIngresoOpen] = useState(false);
const [anioMallaOpen, setAnioMallaOpen] = useState(false);
const [disponibilidadOpen, setDisponibilidadOpen] = useState(false);

const toggleCarrera = () => setCarreraOpen(!carreraOpen);
const toggleAnioIngreso = () => setAnioIngresoOpen(!anioIngresoOpen);
const toggleAnioMalla = () => setAnioMallaOpen(!anioMallaOpen);
const toggleDisponibilidad = () => setDisponibilidadOpen(!disponibilidadOpen);

    //DATOS
  const carreras = {
 "Campus Central": [
        { id: 21047, nombre: "21047 Arquitectura"},
        { id: 21012, nombre: "21012 Contador Público y Auditor"},
        { id: 21033, nombre: "21033 Derecho"},
        { id: 21024, nombre: "21024 Diseño en Comunicación Visual"},
        { id: 21023, nombre: "21023 Diseño Industrial"},
        { id: 21074, nombre: "21074 Ingeniería Civil en Obras Civiles"},
        { id: 21087, nombre: "21087 Ingeniería Civil en Prevención de Riesgos y Medio Ambiente"},
        { id: 21032, nombre: "21032 Ingeniería en Construcción"},
        { id: 21053, nombre: "21053 Psicología"},
        { id: 21056, nombre: "21056 Química y Farmacia"},
        { id: 21034, nombre: "21034 Trabajo Social"}
    ],
    "Campus Ñuñoa": [
        { id: 21046, nombre: "21046 Bachillerato en Ciencias de la Ingeniería"},
        { id: 21071, nombre: "21071 Dibujante Proyectista"},
        { id: 21057, nombre: "21057 Ingeniería Civil Biomédica"},
        { id: 21075, nombre: "21075 Ingeniería Civil Electrónica"},
        { id: 21049, nombre: "21049 Ingeniería Civil en Ciencia de Datos"},
        { id: 21041, nombre: "21041 Ingeniería Civil en Computación Mención Informática"},
        { id: 21096, nombre: "21096 Ingeniería Civil en Mecánica"},
        { id: 21076, nombre: "21076 Ingeniería Civil Industrial"},
        { id: 21055, nombre: "21055 Ingeniería Civil Matemática"},
        { id: 21069, nombre: "21069 Ingeniería Civil Química"},
        { id: 21031, nombre: "21031 Ingeniería en Geomensura"},
        { id: 21030, nombre: "21030 Ingeniería en Informática"},
        { id: 21045, nombre: "21045 Ingeniería Industrial"},
        { id: 21073, nombre: "21073 Ingeniería en Biotecnología"},
        { id: 21054, nombre: "21054 Ingeniería en Alimentos"},
        { id: 21083, nombre: "21083 Química Industrial"}

    
    ],
    "Campus Providencia": [
        { id: 21089, nombre: "21089 Administración Pública"},
        { id: 21002, nombre: "21002 Bibliotecología y Documentación"},
        { id: 21048, nombre: "21048 Ingeniería Comercial"},
        { id: 21081, nombre: "21081 Ingeniería en Comercio Internacional"},
        { id: 21082, nombre: "21082 Ingeniería en Gestión Turística"}
    ]};

    const añosMalla = [
        { id: 1, nombre: "1° Año" }, { id: 2, nombre: "2° Año" },
        { id: 3, nombre: "3° Año" }, { id: 4, nombre: "4° Año" },
        { id: 5, nombre: "5° Año" }, { id: 6, nombre: "6° Año" }
    ];

        const horasDisponibles = [
        { id: 1, nombre: "1 hora" }, { id: 2, nombre: "2 horas" },
        { id: 3, nombre: "3 horas" }, { id: 4, nombre: "4 horas" },
        { id: 5, nombre: "5 horas" }, { id: 6, nombre: "6 horas" }
    ];

    const añosIngreso = ["2015","2016","2017","2018","2019","2020","2021", "2022", "2023", "2024","2025",];

  // Accordion preguntas frecuentes
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
  const toggleQuestion = (index: number) =>
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);

  return (
    <>

          {/* Main */}
      <main className="contenido">
        <section className="formulario-card">
  <div className="form-card">
    <div className="form-header">
      <h2>Formulario ExDev</h2>
      <p>¡Bienvenido/a al formulario de postulación ExDev! Queremos conocerte mejor para saber cómo puedes crecer con nosotros y cómo podemos trabajar juntos en proyectos increíbles. Este formulario no toma más de 5-7 minutos.</p>
    </div>

          <form id="miFormulario">
            {/* Campo 1 */}
            <label htmlFor="nombre">1. Nombre completo</label>
            <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            required
            />

            {/* Campo 2 */}
            <label htmlFor="rut">2. Rut</label>
            <input type="text" value={rut} onChange={handleRutChange} required />

            {/* Campo 3 */}
            <label htmlFor="edad">3. Edad</label>
            <input type="text"  placeholder="20" value={edad} onChange={handleEdadChange} required />

            {/* Campo 4 */}
            <label htmlFor="correo">4. Correo institucional</label>
            <input
                type="text"
                placeholder="usuario@utem.cl"  
                value={correo}
                onChange={handleCorreoChange}
            />
            {errorCorreo && <p style={{ color: "red" }}>{errorCorreo}</p>}


            {/* Campo 5 */}
            <label>5. Carrera / especialidad</label>
            <div className="form-field selector-mobile">
            <button type="button" className="selector-btn" onClick={toggleCarrera}>
                {carrera || "Seleccionar carrera"}
            </button>
            {carreraOpen && (
                <ul className="custom-list">
                {Object.entries(carreras).map(([campus, lista]) => (
                    <li key={campus}>
                    <strong>{campus}</strong>
                    <ul>
                        {lista.map(c => (
                        <li
                            key={c.id}
                            onClick={() => {
                            selectCarrera(c.nombre);
                            setCarreraOpen(false);
                            }}
                        >
                            {c.nombre}
                        </li>
                        ))}
                    </ul>
                    </li>
                ))}
                </ul>
            )}
            </div>
            <input type="hidden" name="carrera" value={carrera} required />

            {/* Campo 6 */}
            <label>6. Año ingreso</label>
            <div className="form-field selector-mobile">
            <button type="button" className="selector-btn" onClick={toggleAnioIngreso}>
                {anioIngreso || "Seleccionar año de ingreso"}
            </button>
            {anioIngresoOpen && (
                <ul className="custom-list">
                {añosIngreso.map(año => (
                    <li
                    key={año}
                    onClick={() => {
                        selectAnioIngreso(año);
                        setAnioIngresoOpen(false);
                    }}
                    >
                    {año}
                    </li>
                ))}
                </ul>
            )}
            </div>
            <input type="hidden" name="anioIngreso" value={anioIngreso} required />

            {/* Campo 7 */}
            <label>7. Año que cursa actualmente</label>
            <div className="form-field selector-mobile">
            <button type="button" className="selector-btn" onClick={toggleAnioMalla}>
                {anioMalla || "Seleccionar año que cursa"}
            </button>
            {anioMallaOpen && (
                <ul className="custom-list">
                {añosMalla.map(año => (
                    <li
                    key={año.id}
                    onClick={() => {
                        selectAnioMalla(año.nombre);
                        setAnioMallaOpen(false);
                    }}
                    >
                    {año.nombre}
                    </li>
                ))}
                </ul>
            )}
            </div>
            <input type="hidden" name="anioMalla" value={anioMalla} required />

            {/* Campo 8 */}
            <label>8. ¿En qué áreas te interesa participar o aprender? (máximo 3)</label>
                <div className="areas-container">
                {areas.map((area, i) => {
                    const selected = areasSeleccionadas.includes(area);
                    return (
                    <label key={i} className={`area-chip ${selected ? "selected" : ""}`}>
                        <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => handleAreaChange(area)}
                        />
                        <span className="chip-text">{area}</span>
                    </label>
                    );
                })}
                </div>

            {otroChecked && (
            <input
                type="text"
                placeholder="Especifica otro"
                value={otroTexto}
                onChange={(e) => setOtroTexto(e.target.value)}
            />
            )}
  



            {/* Campos 9 a 18 */}
            <div>
            <label htmlFor="ayudantia">
              9. ¿Fuiste o eres ayudante en algún ramo?
            </label>
            <p className="campo-ayuda">
              En caso de que no, ¿te gustaría serlo? Cuéntanos brevemente.
            </p>
            <textarea id="ayudantia" required></textarea>
          </div>

            <label>10. Horas semanales para el club</label>
<div className="form-field selector-mobile">
  <button type="button" className="selector-btn" onClick={toggleDisponibilidad}>
    {disponibilidad || "Seleccionar cantidad de horas"}
  </button>
  {disponibilidadOpen && (
    <ul className="custom-list">
      {horasDisponibles.map(h => (
        <li key={h.id} onClick={() => { selectDisponibilidad(h.nombre); setDisponibilidadOpen(false); }}>
          {h.nombre}
        </li>
      ))}
    </ul>
  )}
</div>
<input type="hidden" name="disponibilidad" value={disponibilidad} required />


                        <div>
            <label htmlFor="unirse">
            11. ¿Por qué quieres unirte?
            </label>
            <p className="campo-ayuda">
              motivaciones, expectativas y lo que más te gustaría lograr con nosotros.
            </p>
            <textarea id="unirse" required></textarea>
          </div>

                        <div>
            <label htmlFor="proyectos">
            12. ¿Tienes algún proyecto en mente, que te gustaría desarrollar en Exdev?
            </label>
            <p className="campo-ayuda">
              Queremos conocer tus ideas, no importa si están en borrador.
            </p>
            <textarea id="proyectos" required></textarea>
          </div>

          <div>
            <label htmlFor="redes">
            13. ¿Tienes algún portafolio que quieras compartir?
            </label>
            <p className="campo-ayuda">
              Github, instagram, behance, etc.
            </p>
            <textarea id="redes" required></textarea>
          </div>

            <label>14. ¿Te estás postulando con alguien más? Déjanos sus nombres.</label>
            <textarea id="nombresMas" required></textarea>

            <div>
            <label htmlFor="pitch">
            15. Describe un mini pitch sobre ti.
            </label>
            <p className="campo-ayuda">
              Cuéntanos en menos de 5 líneas quién eres, que te motiva y que te gusta hacer en tu tiempo libre.
            </p>
            <textarea id="pitch" required></textarea>
          </div>

            <label>16. Apodo o nombre por el que prefieras ser llamado.</label>
            <textarea required></textarea>

            <label>17. Emoji de tu animal favorito (o uno que te represente)</label>
            <textarea id="emojiAnimal" placeholder="🦊" required></textarea>

            <div>
            <label htmlFor="momazo">
            18. Deja el último meme que te dio risa.
            </label>
            <p className="campo-ayuda">
              Link, imagen o descripción.
            </p>
            <textarea id="momazo" required></textarea>
          </div>

            <div>
                  {/* DROP ZONE */}
                  <div
                    id="drop-zone"
                    className="drop-zone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{
                      border: "2px dashed #ccc",
                      padding: "20px",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                  >
                    <p>📂 Arrastra tu meme aquí o haz click para subir</p>
                    <button type="button" className="btn-meme" onClick={handleClick}>
                      Seleccionar meme
                    </button>
                    <input
                      type="file"
                      ref={inputRef}
                      onChange={handleFileChange}
                      accept="image/*,image/gif"
                      style={{ display: "none" }}
                    />

                    {/* PREVIEW */}
                    <div className="preview-files" style={{ marginTop: "15px" }}>
                      {files.map((file, i) => (
                        <img
                          key={i}
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          width={100}
                          style={{ margin: "5px", borderRadius: "8px" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

            <button type="submit" className="btn-enviar">Enviar</button>
          </form>

          {/* Preguntas frecuentes */}
            <section className="questions">
              <h2 className="subtitle3">Preguntas frecuentes</h2>
              <p className="questions__paragraph">Resuelve tus dudas antes de unirte.</p>
              <div className="questions__container">
                {preguntas.map((item, i) => (
                  <div key={i} className={`question ${abiertas.includes(i) ? "open" : ""}`}>
                    <div className="question__header" onClick={() => togglePregunta(i)}>
                      <span>{item.pregunta}</span>
                      <div className="arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className={`arrow-icon ${abiertas.includes(i) ? "open" : ""}`}
                        >
                          <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" />
                        </svg>
                      </div>
                    </div>
                    <div
                      className="question__content"
                      style={{
                        maxHeight: abiertas.includes(i) ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                      }}
                    >
                      <p>{item.respuesta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
             </div>
        </section>
      </main>

    </>
      );
}

export default Apply;
