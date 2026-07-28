//function define

function welcome() {
  console.log("Welcome to JavaScript");
}

// function celling
welcome();

//Parameter Function

function greet(name) {
  console.log("Good Morning" + " " + name);
}

greet("Aneesha");

//Multiple Parameters

function studentInfo(name, city) {
  console.log("name : " + name);
  console.log("city : " + city);
}

studentInfo("Aneesha", "Bhopal");

// Return

function add() {
  return 10 + 20;
}

console.log(add());

function multiply() {
  return 5 * 4;
}

let answer = multiply();
console.log(answer);

//Functions – Return with Parameters

function multiply(x, y) {
  return x * y;
}

console.log(multiply(100, 2));

function add(a, b) {
  return a + b;
}

console.log(add(15, 25));

//Function Expression

const welcom = function () {
  console.log("Welcome to JavaScript");
};

welcom();

// Arrow function

const hello = () => {
  console.log("Hello JavaScript");
};

hello();

// Types of Scope :-

// 1. Global Scope

let city = "Bhopal";

function showCity() {
  console.log(city);
}

showCity();

// 2. Local Scope

function student() {
  let name = "Aneesha Chourasia";
  console.log(name);
}

student();
console.log(name);

function student() {
  let name = "Aneesha";
}

student();

console.log(name);
console.log("Hello");

// CallBack Function

function displayMessage(message) {
  console.log("Welcome to " + message);
}

function executeFunction(callback) {
  callback("JavaScript");
}

executeFunction(displayMessage);
