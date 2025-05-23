console.log("Sejal");

//variables

fullname = "Preetish";

age = 25;

price = 99.99;

a = null;

y = undefined;

isBoolean = true;

console.log(isBoolean);

console.log(935000 + 59000);

//ES6 let,  var, const

var age = 25;

var age = 26;

var age = 27;

console.log(age);

//let

let nameVariable = "preetish";

// let name = niket; // ERROR: cannot declare block scope variable;

console.log(nameVariable);

//const

const PI = 3.14;

// const PI = 413;

// PI = 314;  // ERROR: Assignment to constant variable (uncaught TypeError)

console.log(PI);

// Data types

//number, string, boolean, undefined, null( absence of object) , BigInt, Symbol

let x = null;

console.log(x, typeof x); // null , 'object'

let xyz = BigInt("123");

console.log(xyz, typeof xyz); // 123n , bigint

let abc = Symbol("value");

console.log(abc, typeof abc); // Symbol(value) , 'symbol'

// practice

function createProduct(title, rating, price, offer, isDeal) {
  return {
    title,
    rating,
    price,
    offer,
    isDeal,
  };
}

const product = createProduct("Laptop", 4.2, 2200, 10, true);

console.log(product);

console.log(product.price);

console.log(typeof product["rating"]);

// INFO: Symbol variable

const var1 = Symbol();

console.log(var1);

const var2 = Symbol("Variable 1");
const var3 = Symbol("Variable 1");

console.log(var2);
console.log(var2.description); // Variable 1

console.log(var2 === var3); // false (each symbol is unique)

console.log(var2.description === var3.description); //true

// Symbol as object's key

const user = {};

const id = Symbol("userId");

user[id] = 101;

console.log(user); // { Symbol(userId):101}

user[Symbol("userID")] = "12qusb45fjdn"; // no conflict between both keys
