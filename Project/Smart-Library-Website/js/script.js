let libraryBooks = [
  "Atomic Habits",
  "Rich Dad Poor Dad",
  "Clean Code",
  "The Alchemist",
  "Deep Work",
  "Ikigai",
  "Think and Grow Rich",
  "The Psychology of Money",
  "Zero to One",
  "The Pragmatic Programmer",
];

console.log("Library Books:", libraryBooks);

console.log("Total Books:", libraryBooks.length);

console.log("First Book:", libraryBooks[0]);

console.log("Last Book:", libraryBooks[libraryBooks.length - 1]);

libraryBooks.push("The Intelligent Investor", "Sapiens");

console.log(libraryBooks);

let removedBook = libraryBooks.pop();

console.log("Updated Library:", libraryBooks);
console.log("Removed Book:", removedBook);
console.log("Total Books:", libraryBooks.length);

console.log("Atomic Habits Available:", libraryBooks.includes("Atomic Habits"));

console.log("Harry Potter Available:", libraryBooks.includes("Harry Potter"));

let foundBook = libraryBooks.find((book) => book === "Deep Work");

console.log(foundBook);

let cleanBooks = libraryBooks.filter((book) => book.includes("Clean"));

console.log(cleanBooks);

let displayBooks = libraryBooks.map((book) => {
  return "📚 " + book;
});

console.log(displayBooks);

libraryBooks.sort();

console.log(libraryBooks);
