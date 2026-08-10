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

// Lesson 12: String Methods (Part 2)

// includes()

let libraryBook = "Atomic Habits";

console.log(libraryBook.includes("Habit"));

let adminEmail = "admin@gmail.com";

console.log(adminEmail.includes("@"));

// startsWith()

let websiteURL = "https://openai.com";

console.log(websiteURL.startsWith("https://"));

let libraryBookId = "BK1025";

console.log(libraryBookId.startsWith("BK"));

// endsWith()

let resumeFile = "resume.pdf";

console.log(resumeFile.endsWith(".pdf"));

let studentEmail = "aneesha@gmail.com";

console.log(studentEmail.endsWith("@gmail.com"));

// replace()

let welcomeMessage = "Welcom to Smart Library";

console.log(welcomeMessage.replace("Welcom", "Welcome"));

let studentGreeting = "Hello Student";

console.log(studentGreeting.replace("Student", "Aneesha"));

// replaceAll()

let programmingText = "Java Java Java";

console.log(programmingText.replaceAll("Java", "JS"));

let technologyList = "HTML HTML HTML";

console.log(technologyList.replaceAll("HTML", "CSS"));

// slice()

let studentName = "Aneesha";

console.log(studentName.slice(0, 3));

let programmingLanguage = "JavaScript";

console.log(programmingLanguage.slice(4));

let supportEmail = "admin@gmail.com";

console.log(supportEmail.slice(5));

let documentFile = "resume.pdf";

console.log(documentFile.slice(-4));

// Lesson 12: String Methods (Part 3)

// charAt()

let word = "JavaScript";

console.log(word.charAt(0));

console.log(word.charAt(5));

console.log(word.charAt(word.length - 1));

// indexOf()

console.log(word.indexOf("a"));

console.log(word.indexOf("Script"));

console.log(word.indexOf("z"));

// lastIndexOf()

console.log(word.lastIndexOf("a"));

console.log(word.lastIndexOf("Script"));

console.log(word.lastIndexOf("x"));

// subString()

console.log(word.substring(4, 10));

console.log(word.substring(0, 4));

console.log(word.substring(4, 6));

console.log(word.substring());

// start > end → automatically swap

console.log(word.substring(4, 6));

console.log(word.substring(6, 4));

console.log(word.substring(3, 7));

// split()

let skills = "HTML,CSS,JavaScript,React";

console.log(skills.split(","));

let text = "I love JavaScript";

console.log(text.split(" "));

// concat()

let first = "Aneesha";
let lastName = "Chourasia";

console.log(first.concat(" ", lastName));
