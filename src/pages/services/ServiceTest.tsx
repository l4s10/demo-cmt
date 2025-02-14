import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import servicesData from '../../data/data-services.json';
import NavBar from '../../components/navbar/Navbar';
import './AllServices.css';
import Footer from '../../components/footer/Footer';

// Definir la interfaz para los servicios
interface Service {
    id: number;
    name: string;
    description: string;
    descriptionLong?: string; // Opcional
    image: string;
    colors: {
        name: string;
        image: string;
    }[];
}

const ServiceTest: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
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
            const filteredSuggestions = servicesData
                .filter(service => service.name.toLowerCase().includes(term.toLowerCase()))
                .map(service => service.name);
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Función para abrir el modal
    const handleShowModal = (service: Service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    // Filtrar servicios según el término de búsqueda
    const filteredServices = servicesData.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <NavBar />
            <Container className="all-services-section">
                {/* Animación para el título y barra de búsqueda */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <Row className="all-services-main">
                        <Col>
                            <h2>Nuestros Servicios</h2>
                            <div className="suggestions-container">
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar servicios..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        updateSuggestions(e.target.value);
                                    }}
                                    className="all-services-search-bar"
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

                {/* Animación para las tarjetas de servicios */}
                <motion.div
                    ref={cardsRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <Row className="all-services-gallery justify-content-center">
                        {filteredServices.length > 0 ? (
                            filteredServices.map((service, index) => (
                                <Col key={service.id} md={4} className="mb-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                    >
                                        <Card className="service-item" onClick={() => handleShowModal(service)}>
                                            <Card.Img variant="top" src={service.image} alt={service.name} />
                                            <Card.Body>
                                                <Card.Title>{service.name}</Card.Title>
                                                <Card.Text>{service.description}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))
                        ) : (
                            <Col className="text-center">
                                <p className="no-results-message">No se encontraron Servicios/Materiales.</p>
                            </Col>
                        )}
                    </Row>
                </motion.div>
            </Container>

            {/* Modal */}
            {selectedService && (
                <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal modal-xl">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedService.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={6} className="mb-3">
                                <img 
                                    src={selectedService.image} 
                                    alt={selectedService.name} 
                                    className="img-fluid rounded" 
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <p>{selectedService.description}</p>
                                <p>{selectedService.descriptionLong}</p>
                            </Col>
                        </Row>
                        <h5>Colores disponibles:</h5>
                        <Row>
                            {selectedService.colors.map((color, index) => (
                                <Col key={index} xs={12} sm={6} md={4} className="mb-3 color-item">
                                    <img 
                                        src={color.image} 
                                        alt={color.name} 
                                        className="img-fluid rounded" 
                                    />
                                    <p>{color.name}</p>
                                </Col>
                            ))}
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

export default ServiceTest;