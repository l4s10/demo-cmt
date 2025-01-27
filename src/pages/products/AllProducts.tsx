import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, Form, Container, Row, Col } from 'react-bootstrap';
import './AllProducts.css';
import NavBar from '../../components/navbar/Navbar';

const products = [
    {
        id: 1,
        name: 'Producto 1',
        description: 'Descripción del producto 1',
        image: "https://placehold.co/600x400?text=Producto+1"
    },
    {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del producto 2',
        image: "https://placehold.co/600x400?text=Producto+2"
    },
    {
        id: 3,
        name: 'Producto 3',
        description: 'Descripción del producto 3',
        image: "https://placehold.co/600x400?text=Producto+3"
    },
    {
        id: 4,
        name: 'Producto 4',
        description: 'Descripción del producto 4',
        image: "https://placehold.co/600x400?text=Producto+4"
    },
    {
        id: 5,
        name: 'Producto 5',
        description: 'Descripción del producto 5',
        image: "https://placehold.co/600x400?text=Producto+5"
    },
];

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>Nuestros Productos - CMT</title>
            </Helmet>

            <NavBar/>
            <Container className="all-products-section">
                <Row className="all-products-main">
                    <Col>
                        <h2>Nuestros Productos</h2>
                        <Form.Control
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="all-products-search-bar mb-4"
                        />
                    </Col>
                </Row>
                <Row className="all-products-gallery justify-content-center">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                                <Card className="all-products-card">
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col className="text-center">
                            <p className="no-results-message">No se encontraron productos.</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
}

export default AllProducts;