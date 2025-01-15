import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Form, Modal, Button, Card } from 'react-bootstrap';
import worksData from '../../data/data-works.json';
import NavBar from '../../components/navbar/Navbar';
import './AllWorks.css';

const AllWorks = () => {
    // ** Hooks **
    // Estado para almacenar el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');
    // Estado para controlar el modal
    const [showModal, setShowModal] = useState(false);
    // Estado para almacenar la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Filtrar trabajos según el término de búsqueda
    const filteredWorks = worksData.filter(work =>
        work.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Función para abrir el modal con la imagen seleccionada
    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <>
            <Helmet>
                <title>Trabajos Realizados - CMT</title>
            </Helmet>
            <NavBar />
            <Container className="all-works-section">
                <Row className="all-works-main">
                    <Col>
                        <h2>Trabajos Realizados</h2>
                        <Form.Control
                            type="text"
                            placeholder="Buscar trabajos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="all-works-search-bar mb-4"
                        />
                    </Col>
                </Row>
                <Row className="all-works-gallery justify-content-center">
                    {filteredWorks.map(work => (
                        <Col key={work.id} md={4} className="mb-4">
                            <Card className="work-item">
                                <Card.Img
                                    variant="top"
                                    src={work.urlImagen}
                                    alt={work.titulo}
                                    onClick={() => handleImageClick(work.urlImagen)}
                                    style={{ cursor: 'pointer' }}
                                />
                                <Card.Body>
                                    <Card.Title>{work.titulo}</Card.Title>
                                    <Card.Text>{work.descripcion}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Realizado el día: {work.fecha}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

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
        </>
    );
};

export default AllWorks;