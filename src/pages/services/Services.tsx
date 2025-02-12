import ItemList from '../../components/itemList/ItemList';
import servicesData from '../../data/data-services.json';

const Services = () => {
    return (
        <ItemList
            id="servicios"
            title="Nuestros Servicios"
            items={servicesData}
        />
    );
};

export default Services;