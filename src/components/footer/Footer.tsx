import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {currentYear} CMT Terminaciones. Todos los derechos reservados.</p>
            <div className="developer-info">
                <a href="https://www.linkedin.com/in/franciscomv2001dev" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} /> Desarrollado por Francisco Muñoz
                </a>
                <span> | </span>
                <a href="mailto:franciscoignaciomv2001@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> Contacto técnico
                </a>
            </div>
        </footer>
    );
}

export default Footer;