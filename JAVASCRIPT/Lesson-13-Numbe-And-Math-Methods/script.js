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

// 8. Math.min()

console.log(Math.min(10, 50, 3, 44));
console.log(Math.min(-2, 0, -5, -8));

// 9. Math.pow(base, exponent);

console.log(Math.pow(3, 2));
console.log(Math.pow(4, 3));
console.log(Math.pow(10, 2));

// 10. Math.sqrt(number); => square root return karta hai.

console.log(Math.sqrt(16));
console.log(Math.sqrt(81));
console.log(Math.sqrt(100));

// 11. Math.cbrt(number); => cube root return karta hai.

console.log(Math.cbrt(8));
console.log(Math.cbrt(125));
console.log(Math.cbrt(1000));

// 12. Math.sign() =>"{ +ve = 1 , -ve = -1 , 0 = 0 }"

console.log(Math.sign(100));
console.log(Math.sign(-20));
console.log(Math.sign(0));
