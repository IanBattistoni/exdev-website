import React from "react";
import "./footer.css";

import { ReactComponent as Logo } from "../../../assets/svg/ig_utem.svg";
import { ReactComponent as FaLinkedin } from "../../../assets/svg/LinkedIn-svgrepo.svg";
import { ReactComponent as FaInstagram } from "../../../assets/svg/instagram-icon.svg";
import { ReactComponent as FaGithub } from "../../../assets/svg/Github-svgrepo.svg";


export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Identidad */}
        <div className="footer-section">
            <div className="footer-logo">
              <Logo className="logo-svg" />
            </div>
        </div>

        {/* Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="contact-list">
            <li className="contact-item">
              {/* Ícono de ubicación */}
              <svg 
                className="icon" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z" />
              </svg>
              <span>Av. José Pedro Alessandri 1242, Ñuñoa, Región Metropolitana</span>
            </li>
            <li className="contact-item">
            {/* Ícono de correo */}
            <svg 
              className="icon" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
            </svg>
            <span>exdev@utem.cl</span>
          </li>
          </ul>
        </div>


        {/* Redes Sociales */}
       <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-wrapper">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-wrapper">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-wrapper">
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p> © Club ExDev 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
