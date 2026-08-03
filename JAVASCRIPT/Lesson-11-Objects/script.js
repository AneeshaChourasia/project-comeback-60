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
