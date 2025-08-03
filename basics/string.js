//string

let firstName = "Harshada";
let lastNamme = "Jain";
let fullName = `Harshada Jain`;

//template literal
console.log(`My full name: ${firstName} ${lastNamme}`);
console.log("Harshada".charAt(3));
console.log("cat"[2]);

//comparing to string
const a = "a";
const b = "b";
if (a < b) {
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} is equal`);
}

const str1 = "Harshada";
const str2 = "harshada";

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
let result = areEqualCaseInsensitive(str1, str2);
console.log(result);

//
const strPrim = "foo";
const strPrim2 = String(1);
const strPrim3 = String(true);
const strPrim4 = new String(strPrim);

console.log(typeof strPrim);
console.log(typeof strPrim2);
console.log(typeof strPrim3);
console.log(typeof strPrim4);

let rollNum = 4;
console.log(rollNum.toString);
console.log(typeof rollNum.toString());

const booleanN = true;
console.log(booleanN.toString());
console.log(typeof booleanN.toString());

const nullexample = null;
// console.log(nullexample.toString());
// console.log(typeof nullexample.toString());
