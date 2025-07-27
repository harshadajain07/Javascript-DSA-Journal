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
