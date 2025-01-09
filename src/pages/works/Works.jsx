import React from 'react';
import './Works.css';

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
    }
];

const Works = () => {
    return (
        <div id="trabajos" className="works-section">
            <div className="main-section">
                <h2>Trabajos Realizados</h2>
                <div className="gallery">
                    {works.map(work => (
                        <div key={work.id} className="work-card">
                            <img src={work.image} alt={work.title} />
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Works;