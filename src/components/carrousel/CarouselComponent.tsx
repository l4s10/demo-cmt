import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/600x400?text=Decoración+1"
                    alt="Decoración 1"
                />
                <Carousel.Caption>
                    <h3>Decoración 1</h3>
                    <p>Descripción de la decoración 1.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/600x400?text=Decoración+2"
                    alt="Decoración 2"
                />
                <Carousel.Caption>
                    <h3>Decoración 2</h3>
                    <p>Descripción de la decoración 2.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placehold.co/600x400?text=Decoración+3"
                    alt="Decoración 3"
                />
                <Carousel.Caption>
                    <h3>Decoración 3</h3>
                    <p>Descripción de la decoración 3.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;