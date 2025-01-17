const products = [
    { id: 1, name: "Laptop", price: 1500, quantity: 5 },
    { id: 2, name: "Smartphone", price: 800, quantity: 10 },
    { id: 3, name: "Tablet", price: 600, quantity: 7 }
];

// Print product list
products.map(product => {
    console.log(`id: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
});

// Calculate total value
const calculateTotalValue = (products) => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
console.log(calculateTotalValue(products));

//