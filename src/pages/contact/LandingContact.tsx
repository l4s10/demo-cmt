import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './LandingContact.css';

const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // La animación se activa solo una vez
        threshold: 0.1 // El porcentaje del elemento visible para activar la animación
    });

    return (
        <div id="contacto" className="contact-section">
            <motion.div
                className="main-section"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                ref={ref}
            >
                <h2>Contacto</h2>
                <p>Para más información, contáctanos a través de los siguientes medios:</p>

                <div className="contact-content">
                    {/* Columna de información de contacto */}
                    <div className="contact-info">
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> Teléfono: +56 9 7611 5563
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} /> Email: cmtterminaciones@gmail.com
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Dirección: Paicaví 1880, 4060598 Concepción, Bío Bío, Chile
                            </li>
                        </ul>
                    </div>

                    {/* Columna de redes sociales */}
                    <div className="social-media">
                        <h3>Síguenos en redes sociales</h3>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/tuinstagram" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.facebook.com/tufacebook" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.linkedin.com/tulinkedin" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
                <a href="mailto:cmtterminaciones@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="contact-button">Enviar Email</button>
                </a>
            </motion.div>
        </div>
    );
}

export default Contact;