/* ==========================================================
   JavaScript - Lesson 01
   Topic  : Output Methods, Variables & Data Types.
   Date   : 02 July 2026
========================================================== */

/* ==========================================================
   1. OUTPUT METHODS
========================================================== */

/*
console.log()
- Used for debugging.
- Output is displayed in the browser console.
*/
console.log("Hello JavaScript");

/*
alert()
- Displays a popup message.
- Mostly used for notifications or testing.
*/
alert("Welcome to JavaScript");

/*
document.write()
- Writes content directly to the webpage.
- Not recommended in modern JavaScript projects.
*/
document.write("I started learning JavaScript.");

/* ==========================================================
   2. VARIABLES
========================================================== */

/*
var
- Old way of declaring variables.
- Can be redeclared and reassigned.
*/

var name = "Aneesha";
console.log(name);

/*
let
- Modern way to declare variables.
- Can be reassigned but cannot be redeclared.
*/

let age = 22;
console.log(age);

age = 23;
console.log(age);

/*
Declaring multiple variables
*/

let collegeName = "ABC College";
let branch = "Computer Science";
let city = "Bhopal";
let isStudent = true;
let percentage = 82.5;
let mobile;
let address = null;

/* ==========================================================
   3. DATA TYPES
========================================================== */

/*
String
*/
console.log(collegeName);
console.log(branch);
console.log(city);

/*
Boolean
*/
console.log(isStudent);

/*
Number
*/
console.log(percentage);

/*
Undefined
*/
console.log(mobile);

/*
Null
*/
console.log(address);

/* ==========================================================
   4. typeof Operator
   Used to check the data type of a variable.
========================================================== */

console.log(typeof collegeName); // string
console.log(typeof branch); // string
console.log(typeof city); // string
console.log(typeof isStudent); // boolean
console.log(typeof percentage); // number
console.log(typeof mobile); // undefined
console.log(typeof address); // object (This is a known JavaScript bug)

/*
const
- Used to declare a constant variable.
- Value cannot be reassigned.
- Preferred for values that never change.
*/

const country = "India";
const company = "OpenAI";

console.log(country);
console.log(company);
