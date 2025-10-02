import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import linkedinIcon from "../../assets/svg/LinkedIn-svgrepo.svg";
import instagramIcon from "../../assets/svg/instagram-icon.svg";
import githubIcon from "../../assets/svg/Github-svgrepo.svg";



type SidebarProps = {
  toggleTheme: () => void;
  theme: string;
};

export default function Sidebar({ toggleTheme, theme }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* Botón hamburguesa + switch fuera del menú */}
      <div className="mobile-controls">
        <button
          className="menu-icon"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          type="button"
        >
          <svg
            viewBox="0 0 24 24"
            className="menu-icon-svg"
            width="32"
            height="32"
            aria-hidden
          >
            <path
              d="M4 5H20M4 12H20M4 19H20"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button
          onClick={toggleTheme}
          className="theme-switch"
          aria-label="Cambiar tema"
          type="button"
        >
          <span className="moon-icon" aria-hidden></span>
          <span
            className={`switch-thumb ${theme === "light" ? "active" : ""}`}
            aria-hidden
          ></span>
          <span className="sun-icon" aria-hidden></span>
        </button>
      </div>

      {/* Overlay detrás del sidebar */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : "closed"}`}
        role="dialog"
        aria-hidden={!isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          className="close-icon"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
          type="button"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
            <path
              d="M6 6L18 18M6 18L18 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Links */}
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/apply" onClick={() => setIsOpen(false)}>
                Aplicar
              </Link>
            </li>
          </ul>
        </nav>

        {/* Iconos sociales abajo */}
        <div className="sidebar-socials">
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>

          <a
            href="https://www.instagram.com/tu-perfil"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>

          <a
            href="https://github.com/tu-perfil"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
        </div>
      </aside>
    </>
  );
}