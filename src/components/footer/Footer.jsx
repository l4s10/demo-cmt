import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2023 CMT Cielos Modulares y Terminaciones</p>
            {/* Enlace al LinkedIn del desarrollador */}
            <a href="https://www.linkedin.com/in/franciscomv2001dev" target="_blank" rel="noreferrer">Desarrollado por Francisco Muñoz</a>
        </footer>
    );
}

export default Footer;