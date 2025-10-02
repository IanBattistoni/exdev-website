import "./header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../pages/Sidebar/Sidebar"; // ajusta la ruta a tu proyecto

// assets
import ExdevLogo from "../../../assets/img/exdevlogo.png";
import ExdevSoloLogo from "../../../assets/img/exdev-solologo.png";

function Header() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/">
          <picture>
            <source srcSet={ExdevSoloLogo} media="(max-width: 400px)" />
            <img src={ExdevLogo} alt="Logo Exdev" className="exdev-logo" />
          </picture>
        </Link>
      </div>

      {/* Navegación en desktop */}
      <nav className="nav desktop-nav">
        <Link to="/" title="Ir a inicio">
          Inicio
        </Link>
        <Link to="/about" title="Sobre nosotros">
          Nosotros
        </Link>
        <button
          onClick={toggleTheme}
          className="theme-switch"
          aria-label="Cambiar tema"
        >
          <span className="moon-icon"></span>
          <span
            className={`switch-thumb ${theme === "light" ? "active" : ""}`}
          ></span>
          <span className="sun-icon"></span>
        </button>
      </nav>

      {/* Navegación en móvil: hamburguesa + switch */}
      <div className="mobile-nav">
        <Sidebar toggleTheme={toggleTheme} theme={theme} />
      </div>
    </header>
  );
}

export default Header;

