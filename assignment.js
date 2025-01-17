const products = [
    { id: 1, name: "Laptop", price: 1500, quantity: 5 },
    { id: 2, name: "Smartphone", price: 800, quantity: 10 },
    { id: 3, name: "Tablet", price: 600, quantity: 7 }
];

// Print product list
const printProducts = (productList) => {
    productList.map(product => {
        console.log(`id: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
    });
}
printProducts(products);

// Calculate total value
const calculateTotalValue = (products) => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
console.log(calculateTotalValue(products));

// Filter by minPrice
const filterByMinPrice = (products, minPrice) => {
    return products.filter(product => product.price >= minPrice);
}
console.log(filterByMinPrice(products, 800));

// Add new product
const addProduct = product => {
    products.push(product);
}
addProduct({id: 4, name: "Macbook", price: 1500, quantity: 8});
printProducts(products);

console.log();

// Remove product by ID
const removeProductById = (id) => {
    return products.filter(product => product.id !== id);
}
newProducts = removeProductById(4);
printProducts(newProducts);

console.log();

// Update product quantity
const updateQuantity = (id, newQuantity) => {
    products.map(product => {
        if (product.id === id) {
            product.quantity = newQuantity;
        }
    });
}
updateQuantity(1, 20);
printProducts(products);