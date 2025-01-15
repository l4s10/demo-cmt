import './Footer.css';

const Footer = () => {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {currentYear} CMT Terminaciones</p>
            {/* Enlace al LinkedIn del desarrollador */}
            <a href="https://www.linkedin.com/in/franciscomv2001dev" target="_blank" rel="noreferrer">Desarrollado por Francisco Muñoz</a>
        </footer>
    );
}

export default Footer;