import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './LandingContact.css';
import Footer from '../../components/footer/Footer';

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
                <ul>
                    <li>Teléfono: +56 9 1234 5678</li>
                    <li>Email: info@decoraciones.com</li>
                    <li>Dirección: Calle Falsa 123, Ciudad, País</li>
                </ul>
                <a href="mailto:info@decoraciones.com" target="_blank" rel="noopener noreferrer">
                    <button className="contact-button">Enviar Email</button>
                </a>
            </motion.div>
            <Footer />
        </div>
    );
}

export default Contact;