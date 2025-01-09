import React from 'react';
import './Home.css';
import CarrouselComponent from '../../components/carrousel/CarouselComponent';

const Home = () => {
    return (
        <div className="home-section">
            <div className="main-section">
                {/* <h2>Bienvenido a CMT</h2>
                <p>
                    Ofrecemos las mejores decoraciones para tu hogar.
                </p> */}
                {/* <div className="gallery">
                    <img src="https://via.placeholder.com/300x200" alt="Decoración 1" />
                    <img src="https://via.placeholder.com/300x200" alt="Decoración 2" />
                    <img src="https://via.placeholder.com/300x200" alt="Decoración 3" />
                </div> */}
                <CarrouselComponent />
            </div>
        </div>
    );
}

export default Home;