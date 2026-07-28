// Topic :- Array

// Array Declaration
let colors = ["Red", "Blue", "Green", "Yellow", "White"];

//  Accessing Elements
console.log(colors[0]);
console.log(colors[2]);
console.log(colors[4]);

// Updating Array Value

colors[1] = "Black";
colors[3] = "Pink";

console.log(colors);

// Array Length

console.log(colors.length);

console.log(colors[colors.length - 1]);

// Mini Quiz
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(numbers);

console.log(numbers.length); // Total elements

console.log(numbers.length - 1); // Last index

console.log(numbers[numbers.length - 1]); // Last element

// Array in-Built Methods

// 1. Push() = End me add karta hai

let language = ["HTML", "CSS", "JavaScript"];

language.push("React", "Node.js"); // multiple values bhi accept karta hai.

console.log(language);

// 2. Pop() = End se remove karta hai

let fruits = ["Apple", "Mango", "Banana"];

let removed = fruits.pop();

fruits.push(removed);

console.log(fruits);

// 3. Shift() = Start (First) se remove karta hai

let courses = ["HTML", "CSS", "JavaScript", "React"];

let firstCourse = courses.shift();

console.log(firstCourse);
console.log(courses);

// 4. Unshift() = Start (First) me add karta hai

let books = ["CSS", "JavaScript", "React"];

books.unshift("HTML", "Node.js");

console.log(books);

// includes() method checks whether a specific value exists in an array or not.

let skills = ["HTML", "CSS", "JavaScript", "React"];

// skills.includes("CSS");

console.log(skills.includes("CSS"));

console.log(skills.includes("Python"));

// indexof()

let movies = ["3 Idiots", "Dangal", "PK", "Lagaan"];

console.log(movies.indexOf("PK"));

console.log(movies.indexOf("Bahubali"));

console.log(movies.indexOf("3 Idiots"));
