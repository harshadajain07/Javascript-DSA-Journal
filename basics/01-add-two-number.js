console.log("Hello World");
console.log("Harshada");
console.log("I am super great in starting DSA");

var name = "Goood Morning!!";
console.log(name);

const a = 10;
const b = 20;
const sum = a + b;
console.log(sum);

const multiply = a * b;
console.log(multiply);
const difference = a - b;
console.log(difference);
const modulo = b % a;
console.log(modulo);
let x = 20;
console.log(x);
x = 30;
console.log(x);

let newvar = x + 100;
console.log(newvar);

//Concatination
let firstName = "Harshada";
let lastName = "Jain";
let fullName = firstName + " " + lastName;
console.log(fullName);

let rollNum = [2, 19, 12, 34, 76, 98, 45];
console.log(rollNum[7]);

let nameConv = ["Sachin", "Virat", "Dhoni", "Deepika"];
let mixMatch = ["Harshada", 5, false, "XYZ", 2, true];
console.log(mixMatch[3]);
console.log(nameConv[3]);
console.log(nameConv[2]);

let mixArray = ["first", "second", [2, 13, 5], ["One", "Two", "Three"]];
console.log(mixArray[2][0]);
console.log(mixArray[3][2]);

let directory = {
  a: 7,
  name: "Harshada",
  bool: false,
  rollNum: [2, 3, 4, 5, 6],
};
console.log(directory.a);
console.log(directory.name);
console.log(directory.bool);
console.log(directory.rollNum[3]);

let obj = {
  a: 7,
  firstName: "Khushi",
  lastName: "Zakatia",
  isFemale: true,
  salary: [24000, 50000, 68000],
};
console.log(obj.firstName + " " + obj.lastName);

//Functions

function printHelloWorld() {
  console.log("Hello World!!");
}
//calling the function
printHelloWorld();

function greet(name) {
  console.log("Namaste, " + name);
}
//reuse this function
greet("Akshya");
greet("Mahima");

let k = "harshada jain";

greet(k);

//create a function - add two number

function addTwoSum(a, b) {
  let add = a + b;
  console.log(add);
}

addTwoSum(4, 5);

//multiply function
function multiplyTwoNumber(c, d) {
  let multiplyDigit = c * d;
  console.log(multiplyDigit);
}

let x1 = 4;
let y1 = 9;
multiplyTwoNumber(x1, y1);

//function to create square of number
function square(sq) {
  let result = sq * sq;
  return result;
}

let value = square(-3);
console.log(value);

let z = square(10);
console.log(z);

//if-else if-else

//write a function which accepts the age and tells whether a person is eligible to vote or not

function isEligibleToVote(age) {
  if (age < 1) {
    console.log("Age is not valid");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}
isEligibleToVote(12);
isEligibleToVote(19);
isEligibleToVote(18);
isEligibleToVote(-1);

//create a function to check if a number is even and odd

function isEvenOrOdd(number) {
  let rem = number % 2;
  if (rem == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

isEvenOrOdd(20);
isEvenOrOdd(31);

//Loops

for (let i = 0; i <= 10; i++) {
  console.log("Hello World!!", i);
}

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello World " + i);
}
console.log();

//Reverse loop
console.log("Reverse loop");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

let arr = [9, 10, 87, 34, 73, 84, 67];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log("Array has " + arr[i] + " at " + i + " position");
  }
}

let k1 = 0;
while (k1 < 10) {
  console.log("Hello World " + k1);
  k1++;
}

//write a function that search for an element in an array and return the index.if the element is not present than just return -1

let arr1 = [12, 13, 14, 15, 16, 17, 18, 19, 20];

function searchAnElement(arr1, x) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == x) {
      return i;
    }
  }
  return -1;
}

//searchAnElement(arr1,12) ==> 0
//searchAnElement(arr1,17) ==> 5
//searchAnElement(arr1,89) ==> -1

let result = searchAnElement(arr1, 20); //-1
//let result = searchAnElement(arr1, 49)
console.log(result);
