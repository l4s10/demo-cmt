import ItemList from '../../components/itemList/ItemList';

const products = [
    {
        id: 1,
        name: 'Producto 1',
        description: 'Descripción del producto 1',
        image: 'https://placehold.co/600x400?text=Producto+1'
    },
    {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del producto 2',
        image: 'https://placehold.co/600x400?text=Producto+2'
    },
    {
        id: 3,
        name: 'Producto 3',
        description: 'Descripción del producto 3',
        image: 'https://placehold.co/600x400?text=Producto+3'
    }
];

const Products = () => {
    return (
        <>
            <ItemList
                id="productos"
                title="Nuestra selección"
                items={products}
            />
        </>
    );
};

export default Products;