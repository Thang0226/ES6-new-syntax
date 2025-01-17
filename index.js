let city = "Ha Noi";
city = "Ho Chi Minh";
const city2 = "Da Nang";
console.log(city);
console.log(city2);

const hello = (name) => `Hello ${name}!`;
console.log(hello("Thang"));

let name = "Thang";
let age = 25;
let address = "Ha Noi";
const intro = `Hello! I am ${name}, I am ${age} and I live in ${address}.`;
console.log(intro);

const html = `
    <h1>Hello John</h1>
    <p>Welcome to ES6</p>`;
console.log(html);





const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);
// const even = numbers.filter(number => number % 2 === 0);
// console.log(even);
// const sum = numbers.reduce((acc, number) => acc + number, 0);
// console.log(sum);
const processArray = (nums) => {
    const doubled = nums.map(num => num * 2);
    console.log(doubled);
    const odd = nums.filter(num => num % 2 === 1);
    console.log(odd);
    // const sum = numbers.reduce((acc, number) => acc * number, 1);
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    return sum;
}
console.log(processArray(numbers));





const product = { pname: "Laptop", pprice: 1500, pbrand: "Dell" };
let {pname, pbrand} = product;
console.log(pname);
console.log(pbrand);










