import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './LandingProducts.css';

const products = [
    {
        id: 1,
        name: 'Producto 1',
        description: 'Descripción del producto 1',
        image: 'https://via.placeholder.com/300x200'
    },
    {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del producto 2',
        image: 'https://via.placeholder.com/300x200'
    },
    {
        id: 3,
        name: 'Producto 3',
        description: 'Descripción del producto 3',
        image: 'https://via.placeholder.com/300x200'
    }
];

const Products = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // La animación se activa solo una vez
        threshold: 0.1 // El porcentaje del elemento visible para activar la animación
    });

    return (
        <div id='productos' className="products-section">
            <motion.div
                className="main-section"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                ref={ref}
            >
                <h2>Nuestra selección</h2>
                <div className="gallery">
                    {products.map(product => (
                        <motion.div
                            key={product.id}
                            className="product-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: product.id * 0.2 }}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default Products;