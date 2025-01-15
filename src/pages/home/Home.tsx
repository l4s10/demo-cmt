import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';
import CarouselComponent from '../../components/carrousel/CarouselComponent';

const Home = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // La animación se activa solo una vez
        threshold: 0.1 // El porcentaje del elemento visible para activar la animación
    });

    return (
        <div className="home-section">
            <Helmet>
                <title>Home - CMT</title>
            </Helmet>
            <motion.div
                className="main-section"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                ref={ref}
            >
                {/* <h2>Bienvenido a CMT</h2>
                <p>
                    Ofrecemos las mejores decoraciones para tu hogar.
                </p> */}
                <CarouselComponent />
            </motion.div>
        </div>
    );
}

export default Home;