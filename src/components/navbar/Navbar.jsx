import React, { useState } from 'react';
import { Link } from 'react-router';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">CMT Cielos Modulares y Terminaciones</Link>
            </div>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="/">Home</a></li>
                    <li className="navbar-item"><a href="/productos">Productos</a></li>
                    <li className="navbar-item"><a href="/trabajos">Trabajos</a></li>
                    <li className="navbar-item"><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
            <div className="navbar-burger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;