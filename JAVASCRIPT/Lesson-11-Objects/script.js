let book = {
  title: "JavaScript Basics",
  author: "John Smith",
  price: 499,
  pages: 250,
};

console.log(book);

// Object Value Access

// 1. Dot Notation

console.log(book.title);
console.log(book.author);
console.log(book.price);
console.log(book.pages);

// 2. Bracket Notation

console.log(book["title"]);
console.log(book["author"]);
console.log(book["price"]);
console.log(book["pages"]);

// Update Property

book.price = 300;

console.log(book);

// Add new Property

book.language = "English";

console.log(book);

// Delete Property

delete book.price;

console.log(book);

// Object.keys(objectName); => Return Property Names (Keys) => Array Form

console.log(Object.keys(book));

//  Object.valus(objectName); => Return Property Value => Array Form

console.log(Object.values(book));

// Object.entries(objectName); => Return Key + Value => Array Form

console.log(Object.entries(book));

// Need to visit every property one by one? → for...in

// 1. Print Only Keys

for (let bookkey in book) {
  console.log(bookkey);
}

// 2. Print Only Values

for (let bookkey in book) {
  console.log(book[bookkey]);
}

// 3. Print Key : Value

for (let bookkey in book) {
  console.log(bookkey, ":", book[bookkey]);
}

// Nested Object

let student = {
  name: "Aneesha",

  age: 22,

  address: {
    city: "Bhopal",

    state: "Madhya Pradesh",

    pincode: 462001,
  },
};

console.log(student);

console.log(student.address.pincode);

console.log(student["address"]["city"]);

// Object Method

let user = {
  username: "Aneesha",
  email: "aneesha@gmail.com",

  login: function () {
    console.log("Login Successful");
  },

  logout: function () {
    console.log("Logout Successful");
  },
};

user.login();

// this keyword

let library = {
  name: "Smart Library",
  city: "Bhopal",
  totalBooks: 500,

  showDetails: function () {
    console.log(this.name);
    console.log(this.city);
    console.log(this.totalBooks);
  },
};

library.showDetails();
