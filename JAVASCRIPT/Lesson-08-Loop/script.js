// Topic: loops

//Print Number
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Print Reverse Number
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

//Print Table '2'
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//Print Reverse Even Number
for (let i = 10; i >= 2; i -= 2) {
  console.log(i);
}

//Print Odd Number
for (let i = 1; i <= 9; i += 2) {
  console.log(i);
}

//Print Reverse Number
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Print Table '5'
for (let i = 5; i <= 30; i += 5) {
  console.log(i);
}

// Part 2 : While Loop

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

//Reverse

let j = 5;

while (j >= 1) {
  console.log(j);
  j--;
}

//Print Even Number

let k = 2;

while (k <= 10) {
  console.log(k);
  k += 2;
}

//Print Odd Number
let x = 1;
while (x <= 9) {
  console.log(x);
  x += 2;
}

//Part 3 : do...while Loop

let y = 1;

do {
  console.log(y);
  y++;
} while (y <= 5);

// Print Reverse Number

let num = 5;

do {
  console.log(num);
  num--;
} while (num >= 1);

// Print Even Number

let e = 2;

do {
  console.log(e);
  e += 2;
} while (e <= 10);

// Print Odd Number

let o = 1;

do {
  console.log(o);
  o += 2;
} while (o <= 9);

// Simple Rule Yaad Rakho
// break = "Mera kaam ho gaya, loop band karo."
// continue = "Is item ko ignore karo, baaki kaam chalu rakho."

// Break

// Print numbers from 1 to 10, but stop when the number becomes 7.

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

//Print numbers from 1 to 20, but skip 10.

let b = 0;

while (b < 20) {
  b++;
  if (b === 10) {
    continue;
  }
  console.log(b);
}

//Print all odd numbers from 1 to 15 using continue.

for (let i = 1; i <= 15; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

//Print numbers from 1 to 20, but skip all multiples of 3 using continue.

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
