import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Modal, Button } from 'react-bootstrap';
import './ItemList.css';

interface Item {
    id: number;
    name: string;
    description: string;
    descriptionLong: string;
    image: string;
}

interface ItemListProps {
    id: string;
    title: string;
    items: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ id, title, items }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [showItemModal, setShowItemModal] = useState(false); // Estado para el modal
    const [selectedItem, setSelectedItem] = useState<Item | null>(null); // Ítem seleccionado

    const handleShowItemModal = (item: Item) => {
        setSelectedItem(item);
        setShowItemModal(true);
    };

    const handleCloseItemModal = () => {
        setShowItemModal(false);
        setSelectedItem(null);
    };

    return (
        <div id={id} className="item-list-section" ref={ref}>
            <motion.div
                className="main-section"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
            >
                <h2>{title}</h2>
                <div className="gallery">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="item-card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            onClick={() => handleShowItemModal(item)} // Abrir modal al hacer clic
                        >
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Modal reutilizado con un id único */}
            {selectedItem && (
                <Modal 
                    show={showItemModal} 
                    onHide={handleCloseItemModal} 
                    centered 
                    className="custom-modal"
                    id="itemListModal" // Identificador único para este modal
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedItem.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img 
                            src={selectedItem.image} 
                            alt={selectedItem.name} 
                            className="img-fluid mb-3" 
                        />
                        <p>{selectedItem.description}</p>
                        <p>{selectedItem.descriptionLong}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseItemModal}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default ItemList;