import React from 'react';
import './LandingProducts.css';
import { Link } from 'react-router';

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
    return (
        <div id='productos' className="products-section">
            <div className="main-section">
                <h2>Nuestros artículos</h2>
                <div className="gallery">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;