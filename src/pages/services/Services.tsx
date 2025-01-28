import ItemList from '../../components/itemList/ItemList';

const services = [
    {
        id: 1,
        name: 'Cielos Modulares',
        description: 'Instalación y mantención de cielos modulares para todo tipo de espacios.',
        image: 'https://placehold.co/600x400?text=Cielos+Modulares'
    },
    {
        id: 2,
        name: 'Pisos Vinílicos',
        description: 'Ofrecemos pisos vinílicos en palmetas y en rollo, ideales para cualquier ambiente.',
        image: 'https://placehold.co/600x400?text=Pisos+Vinílicos'
    },
    {
        id: 3,
        name: 'Pisos Flotantes',
        description: 'Instalación de pisos flotantes de alta calidad y durabilidad.',
        image: 'https://placehold.co/600x400?text=Pisos+Flotantes'
    },
    {
        id: 4,
        name: 'Papeles Murales',
        description: 'Colocación de papeles murales para decorar y personalizar tus paredes.',
        image: 'https://placehold.co/600x400?text=Papeles+Murales'
    },
    {
        id: 5,
        name: 'Caucho',
        description: 'Pisos de caucho en palmetas y in situ, perfectos para áreas de alto tráfico.',
        image: 'https://placehold.co/600x400?text=Caucho'
    },
    {
        id: 6,
        name: 'Cerámico y Porcelanato',
        description: 'Instalación de cerámico y porcelanato para un acabado elegante y resistente.',
        image: 'https://placehold.co/600x400?text=Cerámico+y+Porcelanato'
    }
];

const Services = () => {
    return (
        <ItemList
            id="servicios"
            title="Nuestros Servicios"
            items={services}
        />
    );
};

export default Services;