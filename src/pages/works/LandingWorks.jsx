import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './LandingWorks.css';

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
    const { ref, inView } = useInView({
        triggerOnce: true, // La animación se activa solo una vez
        threshold: 0.1 // El porcentaje del elemento visible para activar la animación
    });

    return (
        <div id="trabajos" className="works-section">
            <motion.div
                className="main-section"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                ref={ref}
            >
                <h2>Proyectos completados</h2>
                <div className="gallery">
                    {works.map(work => (
                        <motion.div
                            key={work.id}
                            className="work-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: work.id * 0.2 }}
                        >
                            <img src={work.image} alt={work.title} />
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Works;