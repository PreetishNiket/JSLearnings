let a = 5;
let b = 2;

// arithmetic

console.log("a =", a, "& b =", b);

console.log("a + b =", a + b);

console.log("a - b =", a - b);

console.log("a x b =", a * b);

console.log("a / b =", a / b);

console.log("a % b =", a % b);

console.log("a ^ b =", a ** b);

//unary
// (pre&post)

console.log(a++); // 5
//6
console.log(++a); //7

console.log(a--); //7
//6
console.log(--a); //5

console.log(a); //5

//assignment

let x = 10;
let y = 2;

console.log((x += y));
console.log((x -= y));
console.log((x *= y));
console.log((x /= y));
console.log((x **= y));

//comparison > < >= =<

let c = 5;
let d = "5";

console.log(c == d); //true
console.log(c === d); //false (strict data type check)

console.log(c !== d); //true

//prompt
// const input = prompt("This is the prompt", "default");

// console.log(input);

//practice of conditional statement

let grade = prompt("Enter the Grade");

if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 70 && grade <= 89) {
  console.log("B");
} else if (grade > 60 && grade <= 69) {
  console.log("C");
} else if (grade >= 50 && grade <= 59) {
  console.log("D");
} else {
  console.log("F");
}
