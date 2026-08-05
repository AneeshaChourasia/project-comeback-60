// Lesson 12: String Methods (Part 1)

// length (Property)

let firstName = "Aneesha";

console.log(firstName.length);


// toUpperCase()

let city = "bhopal";

console.log(city.toUpperCase());


// Original string does not change

let language = "javascript";

language.toUpperCase();

console.log(language);


// Store returned value

let course = "frontend";

let upperCourse = course.toUpperCase();

console.log(upperCourse);


// toLowerCase()

let email = "ADMIN@GMAIL.COM";

console.log(email.toLowerCase());


// trim()

let userName = "   Aneesha   ";

console.log(userName.trim());


// Method Chaining

let loginEmail = "   ADMIN@GMAIL.COM   ";

console.log(loginEmail.trim().toLowerCase());


// trim() with length

let state = "   Madhya Pradesh   ";

console.log(state.trim().length);