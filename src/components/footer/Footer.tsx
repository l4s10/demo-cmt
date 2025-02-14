import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Definir las variantes de animación
    const footerVariants = {
        hidden: { opacity: 0, y: 50 }, // Estado inicial: invisible y desplazado hacia abajo
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Estado final: visible y en su posición original
    };

    // Hook para detectar si el footer está en el viewport
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.footer
            className="footer"
            variants={footerVariants} // Asignar las variantes de animación
            initial="hidden" // Estado inicial
            animate={inView ? 'visible' : 'hidden'} // Estado final basado en si está en el viewport
            ref={ref} // Asignar el ref para detectar el viewport
        >
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
        </motion.footer>
    );
};

export default Footer;