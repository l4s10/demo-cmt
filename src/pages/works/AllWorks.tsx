import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import worksData from '../../data/data-works.json';
import NavBar from '../../components/navbar/Navbar';
import './AllWorks.css';
import Footer from '../../components/footer/Footer';

// Definir la interfaz para los trabajos
interface Work {
    id: number;
    titulo: string;
    descripcion: string;
    longDescription: string;
    fecha: string;
    urlImagen: string;
}

const AllWorks: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    // Hook para detectar si el título está en el viewport
    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Hook para detectar si las tarjetas están en el viewport
    const { ref: cardsRef, inView: cardsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Función para actualizar las sugerencias
    const updateSuggestions = (term: string) => {
        if (term.length > 0) {
            const filteredSuggestions = worksData
                .filter(work => work.titulo.toLowerCase().includes(term.toLowerCase()))
                .map(work => work.titulo);
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Función para abrir el modal
    const handleShowModal = (work: Work) => {
        setSelectedWork(work);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedWork(null);
    };

    // Filtrar trabajos según el término de búsqueda
    const filteredWorks = worksData.filter(work =>
        work.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <NavBar />
            <Container className="all-works-section">
                {/* Animación para el título y barra de búsqueda */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <Row className="all-works-main">
                        <Col>
                            <h2>Trabajos Realizados</h2>
                            <div className="suggestions-container">
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar trabajos..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        updateSuggestions(e.target.value);
                                    }}
                                    className="all-works-search-bar"
                                />
                                {suggestions.length > 0 && (
                                    <ul className="suggestions-list">
                                        {suggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    setSearchTerm(suggestion);
                                                    setSuggestions([]);
                                                }}
                                                className="suggestion-item"
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </Col>
                    </Row>
                </motion.div>

                {/* Animación para las tarjetas de trabajos */}
                <motion.div
                    ref={cardsRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <Row className="all-works-gallery justify-content-center">
                        {filteredWorks.length > 0 ? (
                            filteredWorks.map((work, index) => (
                                <Col key={work.id} md={4} className="mb-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                    >
                                        <Card className="work-item" onClick={() => handleShowModal(work)}>
                                            <Card.Img variant="top" src={work.urlImagen} alt={work.titulo} />
                                            <Card.Body>
                                                <Card.Title>{work.titulo}</Card.Title>
                                                <Card.Text>{work.descripcion}</Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Realizado el día: {work.fecha}</small>
                                            </Card.Footer>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))
                        ) : (
                            <Col className="text-center">
                                <p className="no-results-message">No se encontraron trabajos.</p>
                            </Col>
                        )}
                    </Row>
                </motion.div>
            </Container>

            {/* Modal */}
            {selectedWork && (
                <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal modal-xl">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedWork.titulo}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6} className="mb-3">
                                <img 
                                    src={selectedWork.urlImagen} 
                                    alt={selectedWork.titulo} 
                                    className="img-fluid rounded" 
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <p>{selectedWork.descripcion}</p>
                                <p>Realizado el día: {selectedWork.fecha}</p>
                                <p>{selectedWork.longDescription}</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

            {/* Footer */}
            <Footer />
        </>
    );
};

export default AllWorks;