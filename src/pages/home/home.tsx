import './home.css';
import logo1 from '../../assets/img/IMG_9483.webp';
import logo2 from '../../assets/img/IMG_9468.webp';
function Home() {
    return(
        <section className='home-page'>
            <section className='home-intro'>
            <section className='presentation'>
                <div className='text'>
                    <h1 className='fade-in-left'>Club de Desarrollo Experimental ExDev</h1>
                    <h3 className='fade-in-right'>Somos un club que une los conceptos <strong>experimentar</strong> y <strong>desarrollar</strong>.
                    </h3>
                </div>
                
            </section>
        <section className='gallery fade-in-bottom delay-2'>
            <img src={logo1} alt='img1' />
            <img src={logo2} alt='img2' />
            <img src={logo1} alt='img1-duplicate' />
            <img src={logo2} alt='img2-duplicate' />
      </section>
      </section>
        </section>
        
    );
    
}

export default Home;