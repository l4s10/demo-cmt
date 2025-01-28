import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ItemList.css';

interface Item {
    id: number;
    name: string;
    description: string;
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
                        >
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ItemList;