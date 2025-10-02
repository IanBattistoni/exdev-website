import React from "react";
import "./AboutPage.css";

import club1 from "../../assets/history/gamedev.jpeg";
import club2 from "../../assets/history/indev.png";
import club3 from "../../assets/history/logo.png";
import ContacButton from "../../types/ContacButton";



const milestones = [
  {
    year: 2015,
    title: "GameDev",
    text: "Se fundó en el año 2015 por los estudiantes: Carlos Cordero, Rabsari Lefort, Felipe Torres, Nicolás Rodríguez, Juan Silva y Diego Higuera. Quienes en conjunto habrían decidido que el club se definiría como una agrupación de estudiantes con el objetivo de desarrollar, tanto software como hardware, orientado a los videojuegos dentro de las instancias de la universidad.",
    img: club1,
    type: "rectangular",
  },
  {
    year: 2016,
    title: "InnDev",
    text: "El Club de Innovación y Desarrollo, fue una agrupación estudiantil que nació el año 2016 a raíz de la adjudicación de dos proyectos participantes al Fondos de Desarrollo Institucional (FDI) del Ministerio de Educación. INNDEV se creó para impulsar y desarrollar proyectos que ofrezcan soluciones innovadoras a problemas concretos.",
    img: club2,
    type: "rectangular",
  },
  {
    year: 2021,
    title: "ExDev",
    text: "Es una agrupación estudiantil que nació de la fusión de dos clubes cuyos miembros estaban por titularse, con el fin de dar continuidad a sus esfuerzos y permitir que futuras generaciones retomaran sus proyectos. Se creó para desarrollar iniciativas en domótica, inteligencia artificial, internet de las cosas, videojuegos y cualquier proyecto que se propongan.",
    img: club3,
    type: "square",
  },
];

const coreValues = [
  { title: "Diversidad", desc: "Valoramos la mezcla de carreras, talentos y perspectivas." },
  { title: "Colaboración", desc: "Trabajamos juntos con confianza y respeto, sumando habilidades distintas." },
  { title: "Aprendizaje", desc: "Vemos cada proyecto como una oportunidad de crecer y compartir conocimiento." },
  { title: "Impacto", desc: "Buscamos que nuestras ideas aporten valor real a la comunidad universitaria y más allá." },
];




const AboutPage: React.FC = () => {
  return (
    <main className="about-root">
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Sobre Nosotros</h1>
              <p className="hero-sub">
                ExDev es el Club de Desarrollo Experimental de la UTEM, un espacio creado por estudiantes y para estudiantes, donde la innovación, la tecnología y el hacer por gusto se unen para construir ideas reales. No somos una asignatura, ni un trabajo: somos un equipo multidisciplinario que transforma la curiosidad y la motivación en proyectos concretos.
                <br />
                Nuestro origen se remonta al año 2021, cuando se fusionaron dos iniciativas emblemáticas: el Club de Desarrollo de Videojuegos (GameDev) y el Club de Innovación y Desarrollo (INNDEV). Desde entonces, seguimos el legado de ambos grupos con un enfoque claro: fomentar el aprendizaje activo y crear productos funcionales con impacto dentro y fuera de la universidad.
                <br />
                En ExDev creemos que la universidad debe ser más que teoría. Por eso, cada uno de nuestros proyectos representa una oportunidad para aplicar conocimientos reales, colaborar con otros estudiantes y crear cosas que puedas ver, tocar y decir con orgullo: “esto lo hicimos nosotros”.
                </p>
        </div>
      </section>

      <section className="summary">
        <div className="card intro">
          <h2>Nuestra Filosofía</h2>
          <p>
                Nos mueve la cultura maker, la idea de que cualquiera puede aprender a construir algo sin esperar a ser experto. En ExDev combinamos electrónica, programación, diseño 3D, carpintería, arte, IA y más, porque creemos que el conocimiento se vuelve poderoso cuando se mezcla, se aplica y se comparte.
          </p>
        </div>

        <div className="card how-we-work">
          <h2>Cómo Funcionamos</h2>
            <ol>
                <li>
                <strong>Trabajo en equipo:</strong> Nos enfocamos en trabajar juntos por una meta común,
                sin protocolos rígidos ni horarios estrictos.
                </li>
                <li>
                <strong>Compromiso y aprendizaje:</strong> Cada miembro se compromete con los proyectos
                y con lo que desea aprender; no se exige perfección, solo ganas de aportar.
                </li>
                <li>
                <strong>Roles claros:</strong> Contamos con roles como líder, encargados administrativos,
                comunicadores, encargados de redes sociales, finanzas, inventario e IT.
                </li>
                <li>
                <strong>Responsabilidades:</strong> Cada rol cumple funciones clave para que el club funcione,
                crezca y se mantenga activo ante la universidad y la comunidad.
                </li>
            </ol>
        </div>
      </section>

<section className="culture">
  <h2 className="section-title">Nuestra Cultura</h2>

  <p className="culture-intro">
    En <strong>Exdev</strong>, la cultura es tan importante como los proyectos.
    Nos definimos por ser un equipo diverso, horizontal y buena onda. Somos
    apasionados por lo que hacemos, pero también valoramos el humor, el respeto
    mutuo y el aprendizaje colectivo. Cada miembro elige un emoji que lo
    representa, y celebramos tanto los avances técnicos como los memes del día.
  </p>

  <p className="culture-intro">
    Compartimos espacios físicos (sí, nuestras queridas salas en Macul) que no
    solo usamos para trabajar, sino también para descansar, compartir y pasarlo
    bien entre clases. No somos formales, pero sí organizados: contamos con
    roles claros, reuniones quincenales llamadas <em>Twicelys</em>, y actividades
    que van desde talleres hasta salidas recreativas.
  </p>

  <div className="culture-grid">
    {coreValues.map((v) => (
      <article key={v.title} className="value-card">
        <div className="value-icon" aria-hidden />
        <h3>{v.title}</h3>
        <p>{v.desc}</p>
      </article>
    ))}
  </div>
</section>


      <section className="history">
        <h2 className="section-title">Nuestra Historia</h2>
        <div className="timeline">
          {milestones.map((m, i) => (
            <div key={m.year} className={`milestone ${i % 2 === 0 ? "left" : "right"}`}>
              <div className="dot" />
              <div className="milestone-content">
                    {m.img && (
                    <img
                        src={m.img}
                        alt={`Evento ${m.year}`}
                        className={`timeline-card-img ${m.type}`}
                    />
                    )}
                <span className="year">{m.year}</span>
                <h6 className="milestone-title">{m.title}</h6> {/* <-- Título agregado */}
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-card">
          <h3>¡Forma parte de nuestro equipo!</h3>
          <p>Estamos buscando personas motivadas. Completa el formulario y cuéntanos cómo puedes contribuir.</p>
          <div className="cta-actions">
            <ContacButton />
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
