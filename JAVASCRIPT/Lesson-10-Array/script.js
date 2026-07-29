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

// slice() = Copy karta hai (Original array change nahi hota.)

let subject = ["Maths", "Physics", "Chemistry", "Hindi", "English"];

console.log(subject);

console.log(subject.slice(1, 4));

console.log(subject.slice(2)); // Start index se lekar last element tak copy karega.

console.log(subject.slice(-2)); // Negative index end se count karta hai.

// splice() = original array ko change (modify) karta hai.

// 1. Remove Example
let games = ["Cricket", "Football", "Hockey", "Tennis", "Chess"];

games.splice(1, 2);

console.log(games);

//2. Add Example

let animals = ["Lion", "Tiger", "Elephant"];

animals.splice(1, 0, "Zebra");

console.log(animals);

// 3. Replace Example

let laptops = ["HP", "Dell", "Lenovo", "Acer"];

laptops.splice(2, 1, "Asus");

console.log(laptops);

// concat() =  method ka use do ya usse zyada arrays ko combine (merge) karne ke liye hota hai.

let frontend = ["HTML", "CSS"];

let backend = ["Node.js", "MongoDB"];

let fullStack = frontend.concat(backend);

console.log(fullStack);

// Example Merge 2 array

let fruit = ["Apple", "Mango"];

let vegetables = ["Potato", "Tomato"];

let basket = fruit.concat(vegetables);

console.log(fruit);

console.log(vegetables);

console.log(basket);

// Example Merge 3 Array

let moviesList = ["3 Idiots", "Dangal"];

let musicList = ["Arijit Songs", "KK Songs"];

let hobbyList = ["Photography"];

let entertainment = moviesList.concat(
  musicList,
  hobbyList,
  "Gaming",
  "Traveling",
);

console.log(entertainment);

//  join()

let days = ["Mon", "Tue", "Wed"];

console.log(days.join(" | "));

// reverse()

let marks = [50, 60, 70, 80];

marks.reverse();

console.log(marks);

// sort()

let names = ["Riya", "Ankit", "Zoya", "Deep"];

names.sort();

console.log(names);
