//For loops

// const n = prompt("Enter the Value");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log(sum);

// infinite loop

// for (i = 0; i >= 0; i++) {
//   console.log("Error");
// }

//while

let i = 5;
while (i < 10) {
  console.log("preetish");
  i++;
}

//do while

let j = 5;
do {
  console.log(j);
  j++;
} while (j <= 3); //executed at least once

//for-of loop

let str = "Preetish";

let length = 0;

for (let val of str) {
  console.log(val);
  length++;
}

console.log(length);

//for-in loop

let student = {
  name: "Sejal Sethi",
  age: 24,
  percentile: 80.5,
  isPass: true,
};

for (let key in student) {
  console.log(key, student[key]);
}

// practice questions

let limit = 15;
for (let i = 0; i <= limit; i++) {
  if (i % 2 === 0) console.log(i);
}

// let input = Number(prompt("Enter a value"));
// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a <= input);

//game

let userInput = prompt("How much you love Sejal?");

let random = "infinite";

while (userInput !== random) {
  userInput = prompt("Wrong answer kitnah karta hai , dobara soch");
}

console.log("Congrats!! , itnah hi kario but kya woh karti hai? hehe");
