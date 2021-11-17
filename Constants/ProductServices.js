
const PRODUCTS = [
    {
        id: 100,
        name: 'Brown shirt',
        price: 350,
        image: require('../assets/products/brown.jfif'),
    },

    {
        id: 101,
        name: 'Blue shirt',
        price: 350,
        image: require('../assets/products/blue.jfif'),
    },

    {
        id: 100,
        name: 'Red shirt',
        price: 350,
        image: require('../assets/products/red.jfif'),
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}