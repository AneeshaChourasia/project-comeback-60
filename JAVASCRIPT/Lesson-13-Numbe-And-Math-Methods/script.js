// Number Methods

// 1. Number()

let num = "85";

console.log(num);
console.log(typeof num);

console.log(Number(num));
console.log(typeof Number(num));

// 2. parseInt()

let marks = "87.75";

console.log(parseInt(marks));

// 3. parseFloat()

console.log(parseFloat(marks));

// 4. isNaN()

console.log(isNaN("25"));
console.log(isNaN("25abc"));
console.log(isNaN(25));
console.log(isNaN("hello"));

// 5. isFinite()

console.log(isFinite(100));
console.log(isFinite("100"));
console.log(isFinite("100px"));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));

// 6. toFixed()

let price = 499.987;

console.log(price.toFixed(2));
console.log(price.toFixed(1));
console.log(price.toFixed(0));

// Math Methods

// 1. Math.round()

console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.8));

// 2. Math.floor()

console.log(Math.floor(5.2));
console.log(Math.floor(5.9));
console.log(Math.floor(-3.2));

// 3. Math.ceil()

console.log(Math.ceil(5.2));
console.log(Math.ceil(5.9));
console.log(Math.ceil(-3.2));

// 4. Math.trunc()

console.log(Math.trunc(5.9));
console.log(Math.trunc(10.99));
console.log(Math.trunc(-3.8));

// 5. Math.abs()

console.log(Math.abs(-50));
console.log(Math.abs(25));
console.log(Math.abs(-7.5));

// 6. Math.random()

console.log(Math.random());

// 7. Math.max()

console.log(Math.max(10, 25, 5, 40));
console.log(Math.max(-10, -5, -20));
