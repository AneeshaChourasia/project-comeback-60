// JavaScript Lesson 06 - Conditional Statements

// ------------------------------------
// if Statement
// ------------------------------------

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

// ------------------------------------
// if...else Statement
// ------------------------------------

let temperature = 35;

if (temperature >= 30) {
  console.log("It's Hot Today");
} else {
  console.log("Weather is Pleasant");
}

// ------------------------------------
// else if Statement
// ------------------------------------

let marks = 68;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// ------------------------------------
// Ternary Operator
// ------------------------------------

let a = 18;
let res = a >= 18 ? "Eligible" : "Not Eligible";
console.log(res);

let b = 10;
console.log(b >= 8 ? "Eligible" : "Not Eligible");

let mark = 40;
console.log(mark >= 35 ? "Pass" : "Fail");

let isLoggedIn = true;
// console.log((isLoggedIn  ? "Welcome User" : "Please Login"));

let result = isLoggedIn ? "Welcome User" : "Please LOgin";
console.log(result);

let isAdmin = true;
let result1 = isAdmin ? "Admin Panel" : "Access Denied";
console.log(result1);
