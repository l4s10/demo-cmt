import React, { useState } from 'react';
import { Card, Form, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import './AllWorks.css';
import NavBar from '../../components/navbar/NavBar';

const works = [
    {
        id: 1,
        title: 'Trabajo 1',
        description: 'Descripción del trabajo 1',
        image: 'https://via.placeholder.com/300x200'
    },
    {
        id: 2,
        title: 'Trabajo 2',
        description: 'Descripción del trabajo 2',
        image: 'https://via.placeholder.com/300x200'
    },
    {
        id: 3,
        title: 'Trabajo 3',
        description: 'Descripción del trabajo 3',
        image: 'https://via.placeholder.com/300x200'
    },
    {
        id: 4,
        title: 'Trabajo 4',
        description: 'Descripción del trabajo 4',
        image: 'https://via.placeholder.com/300x200'
    },
    {
        id: 5,
        title: 'Trabajo 5',
        description: 'Descripción del trabajo 5',
        image: 'https://via.placeholder.com/300x200'
    },
];

const AllWorks = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredWorks = works.filter(work =>
        work.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <NavBar/>
            <Container className="all-works-section">
                <Row className="all-works-main">
                    <Col>
                        <h2>Proyectos Completados</h2>
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
                        <Col key={work.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                            <Card className="all-works-card">
                                <Card.Img variant="top" src={work.image} />
                                <Card.Body>
                                    <Card.Title>{work.title}</Card.Title>
                                    <Card.Text>{work.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default AllWorks;