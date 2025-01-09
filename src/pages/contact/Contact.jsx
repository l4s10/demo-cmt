import React from 'react';
import './Contact.css';
import Footer from '../../components/footer/Footer';

const Contact = () => {
    return (
        <div id="contacto" className="contact-section">
            <div className="main-section">
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
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Contact;