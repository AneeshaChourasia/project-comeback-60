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
