/* ==========================================================
   JavaScript - Lesson 02
   Topic  : Variables (Deep Dive) & Naming Rules
   Day    : 02
========================================================== */

/* ==========================================================
   1. WHAT IS A VARIABLE?
========================================================== */

/*
A variable is a container used to store data.

Syntax:
let variableName = value;
*/

let studentName = "Rahul";

console.log(studentName);

/* ==========================================================
   2. VARIABLE DECLARATION
========================================================== */

/*
Declaration means creating a variable without assigning a value.
*/

let city;

console.log(city); // undefined

/* ==========================================================
   3. VARIABLE INITIALIZATION
========================================================== */

/*
Initialization means assigning a value to a variable.
*/

city = "Indore";

console.log(city);

/* ==========================================================
   4. VARIABLE REASSIGNMENT
========================================================== */

/*
The value of a variable declared with 'let'
can be changed.
*/

let age = 22;

console.log(age);

age = 23;

console.log(age);

/* ==========================================================
   5. MEANINGFUL VARIABLE NAMES
========================================================== */

/*
Always use meaningful variable names.
*/

let collegeName = "Example College";
let courseName = "B.Tech";
let mobileNumber = "9876543210";
let totalMarks = 450;
let isPlaced = false;

console.log(collegeName);
console.log(courseName);
console.log(mobileNumber);
console.log(totalMarks);
console.log(isPlaced);

/* ==========================================================
   6. CAMEL CASE NAMING
========================================================== */

/*
JavaScript follows camelCase naming convention.

Rule:
- First word starts with a small letter.
- Every next word starts with a capital letter.
*/

let firstName = "Aman";
let lastName = "Sharma";
let studentAddress = "Indore";
let currentSemester = 8;

console.log(firstName);
console.log(lastName);
console.log(studentAddress);
console.log(currentSemester);

/* ==========================================================
   7. VALID VARIABLE NAMES
========================================================== */

let _price = 500;
let $discount = 10;
let name1 = "Riya";

console.log(_price);
console.log($discount);
console.log(name1);

/* ==========================================================
   8. INVALID VARIABLE NAMES
========================================================== */

/*
The following examples are invalid.

❌ let 1city = "Indore";
❌ let student name = "Rahul";
❌ let function = "Hello";

These are written as comments because
they will produce errors if executed.
*/

/* ==========================================================
   9. DECLARATION vs INITIALIZATION
========================================================== */

/*
Declaration

let language;

Initialization

language = "JavaScript";
*/

let language;

language = "JavaScript";

console.log(language);

/* ==========================================================
   10. PRACTICE VARIABLES
========================================================== */

let employeeName = "Rohit";
let employeeId = 101;
let department = "IT";
let salary = 45000;
let isPermanent = true;

console.log(employeeName);
console.log(employeeId);
console.log(department);
console.log(salary);
console.log(isPermanent);

/* ==========================================================
   End of Lesson 02
========================================================== */