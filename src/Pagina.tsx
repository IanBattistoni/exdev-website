import React from "react";
import "./Pagina.css";

import team1 from "./assets/img/feria-exdev-img1.webp";
import team2 from "./assets/img/feria-exdev-img2.webp";
import team3 from "./assets/img/feria-exdev-img3.webp";
import team4 from "./assets/img/feria-exdev-img4.webp";
import proyecto1 from "./assets/img/proyecto1.webp";
import proyecto2 from "./assets/img/proyecto2.webp";
import proyecto3 from "./assets/img/proyecto3.jpg";
import proyecto4 from "./assets/img/proyecto4.webp";

const teamImages = [ team1, team2, team3, team4];

const projects = [
  {
    title: "Portal estudiantil Mi UTEM",
    description: "Aplicación móvil desarrollada por estudiantes del club a comienzos de 2019, pensada para centralizar funciones útiles para la comunidad estudiantil. Actualmente estamos colaborando con el equipo de SISEI para convertirla en la aplicación oficial de la universidad.",
    img: proyecto1,
  },
  {
    title: "Sim Racing",
    description: "Proyecto de simulación de conducción con pedalera y caja de cambios artesanal. Utiliza tecnología de force feedback para replicar sensaciones reales al volante. Todo controlado con una placa Arduino (ATmega32u4) y componentes diseñados por miembros del club.",
    img: proyecto2,
  },
  {
    title: "Proyecto W",
    description: "Vehículo autónomo basado en Arduino que utiliza sensores ultrasónicos para detectar obstáculos y tomar decisiones de movimiento de forma autónoma. Un ejemplo funcional de robótica aplicada y pensamiento lógico.",
    img: proyecto3,
  },
  {
    title: "Talleres",
    description: "Organizamos sesiones formativas abiertas donde miembros del club comparten conocimientos en áreas como modelado 3D, desarrollo full stack, Flutter, Arduino, entre otros. Aprendemos colaborativamente, creando comunidad técnica dentro y fuera del aula.",
    img: proyecto4,
  },
  
    
];

export default function Pagina() {
  return (
    <div className="pagina">
      {/* HERO */}
      <header className="hero">
        <h1 className="title">Club de Desarrollo Experimental ExDev</h1>
        <p className="subtitle">
          Somos un club que une los conceptos <strong>experimentar</strong> y <strong>desarrollar</strong>.

        </p>
      </header>

      {/* CARRUSEL DE EQUIPO */}
<section className="team-carousel">
  <div className="team-track">
    {teamImages.map((src, i) => (
      <img key={i} src={src} alt={`team-${i}`} />
    ))}
    {/* Repetimos para efecto infinito */}
    {teamImages.map((src, i) => (
      <img key={`repeat-${i}`} src={src} alt={`team-repeat-${i}`} />
    ))}
  </div>
</section>


      {/* PROYECTOS */}
      <section className="projects">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <img src={p.img} alt={p.title} />
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
