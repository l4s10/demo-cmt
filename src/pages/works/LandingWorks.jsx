import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Modal, Button } from 'react-bootstrap';
import worksData from '../../data/data-works.json';
import './LandingWorks.css';

const LandingWorks = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // La animación se activa solo una vez
        threshold: 0.1 // El porcentaje del elemento visible para activar la animación
    });

    // Estado para controlar el modal
    const [showModal, setShowModal] = useState(false);
    // Estado para almacenar la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState(null);

    // Función para abrir el modal con la imagen seleccionada
    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div id="trabajos" className="works-section">
            <motion.div
                className="main-section"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                ref={ref}
            >
                <h2>Proyectos realizados</h2>
                <div className="gallery">
                    {worksData.map(work => (
                        <motion.div
                            key={work.id}
                            className="work-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: work.id * 0.2 }}
                        >
                            <img
                                src={work.urlImagen}
                                alt={work.titulo}
                                onClick={() => handleImageClick(work.urlImagen)}
                                style={{ cursor: 'pointer' }}
                            />
                            <h3>{work.titulo}</h3>
                            <p>{work.descripcion}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Modal para mostrar la imagen en grande */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Imagen del Trabajo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedImage && <img src={selectedImage} alt="Trabajo" className="img-fluid" />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LandingWorks;