// ===== let and const
let a = 5;
a = 6;

const b = 4;
b = 3;

var c = 4;
c = 1;

// ======= type

let num = 1234;
let floating_num = 12.34;
let string = "Hello";
let isStudent = true;

console.log(num); // 1234
console.log(floating_num); //12.34
console.log(string); // Hello
console.log(isStudent); // true


let num = 1234;
console.log(typeof num); // number

let floating_num = 12.34;
console.log(typeof num); // number


// ================== operation
const name = "Tiger";
const birthday = 1996;
const thisYear = 2018;

const age = thisYear - birthday; // 2018 - 1996
const result = name + " is " + age + " years old." // "Tiger is 22 years old."
console.log(result);

// =================
const height = 4;
const width = 6;

const area = height * width; // 24
console.log(area);
