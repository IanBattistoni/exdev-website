
import './header.css';
//assets
import ExdevLogo from '../../../assets/img/exdevlogo.png';
import ExdevSoloLogo from '../../../assets/img/exdev-solologo.png';
function Header(){
    return(
        <header className="header">
            <div className="logo-container">
                <a href="/">
                <picture>
                    <source srcSet={ExdevSoloLogo} media="(max-width: 400px)" />
                    <img src={ExdevLogo} alt="Logo Exdev" className="exdev-logo" />
                </picture>
                </a>
            </div>
            <nav className="nav">
                
                <a href='/' title='Ir a inicio'>Inicio</a>
                <a href='/about' title='Ir a inicio'>Nostros</a>
            </nav>
        </header>
    );
}
export default Header;