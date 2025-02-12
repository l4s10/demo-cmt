import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import servicesData from '../../data/data-services.json';
import NavBar from '../../components/navbar/Navbar';
import '../services/Services.css';

const ServiceTest: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);

    const handleShowModal = (service: any) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService(null);
    };

    return (
        <>
            <NavBar />
            <Container className="all-services-section">
                <Row className="all-services-main">
                    <Col>
                        <h2>Nuestros Servicios</h2>
                    </Col>
                </Row>
                <Row className="all-services-gallery justify-content-center">
                    {servicesData.map(service => (
                        <Col key={service.id} md={4} className="mb-4">
                            <Card className="service-item" onClick={() => handleShowModal(service)}>
                                <Card.Img variant="top" src={service.image} alt={service.name} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {selectedService && (
                <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedService.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedService.image} alt={selectedService.name} className="img-fluid mb-3" />
                        <p>{selectedService.description}</p>
                        <h5>Colores disponibles:</h5>
                        <Row>
                            {selectedService.colors.map((color: any, index: number) => (
                                <Col key={index} xs={4} className="mb-3">
                                    <img src={color.image} alt={color.name} className="img-fluid" />
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
        </>
    );
};

export default ServiceTest;