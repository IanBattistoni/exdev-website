import './home.css';
//assets
//img

import GalleryIMG1 from '../../assets/img/IMG_9483.webp';
import GalleryIMG2 from '../../assets/img/IMG_9468.webp';
import GalleryIMG3 from '../../assets/img/feria-exdev-img4.webp';
import GalleryIMG4 from '../../assets/img/feria-exdev-5.webp';

//img projects
import MiUTEMIMG from '../../assets/img/mi-utem-img.webp';
import SimRacingIMG from '../../assets/img/sim-racing.webp';
import ProjectWIMG from '../../assets/img/ProjectWArduino.webp';
import CharlaExdevIMG from '../../assets/img/talleres-exdev-img.webp'

//svg
import GitHubIcon from '../../shared/icons/GitHubIcon';
import LinkedInIcon from '../../shared/icons/LinkedIn';
import InstagramIcon from '../../shared/icons/InstagramIcon';
function Home() {
    return(
        <section className='home-page'>
            
            <section className='presentation'>
                <section className='club-presentation'>

                
                <div className='text'>
                    <h1 className='fade-in-left'>Club de Desarrollo Experimental ExDev</h1>
                    <h3 className='fade-in-right'>Somos un club que une los conceptos <strong>experimentar</strong> y <strong>desarrollar</strong>.
                    </h3>
                </div>
                <div className='social-icons delay-2'>
                    <a href='https://www.linkedin.com/company/exdevutem' target='_blank' rel='noopener noreferrer'>
                        <LinkedInIcon className='social-icon' />
                    </a>
                    <a href='https://github.com/exdevutem' target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon className='social-icon' />
                    </a>
                    <a href='https://www.instagram.com/exdevutem' target='_blank' rel='noopener noreferrer'>
                        <InstagramIcon className='social-icon instagram' />
                    </a>
                </div>
                </section>
        <div className='gallery fade-in-bottom delay-2'>
            <img src={GalleryIMG1} alt='img1' />
            <img src={GalleryIMG2} alt='img2' />
            <img src={GalleryIMG3} alt='img1-duplicate' />
            <img src={GalleryIMG4} alt='img2-duplicate' />
      </div>
      </section>
      <section className='projects'>
            <h2>Proyectos</h2>
            <article className='project'>
                <div className='project-image'>
                    <img src={MiUTEMIMG} />
                </div>
                <div className='project-info'>
                    <h3>Portal estudiantil Mi UTEM</h3>
                    <p>
                        Aplicación móvil desarrollada por estudiantes del club a comienzos de 2019, pensada para centralizar funciones útiles para la comunidad estudiantil.
                        Actualmente estamos colaborando con el equipo de SISEI para convertirla en la aplicación oficial de la universidad.
                    </p>
                </div>
            </article>

            <article className='project'>
                <div className='project-image'>
                    <img src={SimRacingIMG} />
                </div>
                <div className='project-info'>
                    <h3>Sim Racing</h3>
                    <p>
                        Proyecto de simulación de conducción con pedalera y caja de cambios artesanal. Utiliza tecnología de <em>force feedback</em> para replicar sensaciones reales al volante. 
                        Todo controlado con una placa Arduino (ATmega32u4) y componentes diseñados por miembros del club.
                    </p>
                </div>
            </article>

            <article className='project'>
                <div className='project-image'>
                    <img src={ProjectWIMG} />
                </div>
                <div className='project-info'>
                    <h3>Proyecto W</h3>
                    <p>
                        Vehículo autónomo basado en Arduino que utiliza sensores ultrasónicos para detectar obstáculos y tomar decisiones de movimiento de forma autónoma.
                        Un ejemplo funcional de robótica aplicada y pensamiento lógico.
                    </p>
                </div>
            </article>

            <article className='project'>
                <div className='project-image'>
                    <img src={CharlaExdevIMG} />
                </div>
                <div className='project-info'>
                    <h3>Tallers</h3>
                    <p>
                        Organizamos sesiones formativas abiertas donde miembros del club comparten conocimientos en áreas como modelado 3D, desarrollo full stack, Flutter, Arduino, entre otros.
                        Aprendemos colaborativamente, creando comunidad técnica dentro y fuera del aula.
                    </p>
                </div>
            </article>
      </section>
        </section>
        
    );
    
}

export default Home;