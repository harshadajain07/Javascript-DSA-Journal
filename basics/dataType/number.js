//In JS - there is nothing int,float,hexadecimal,binary,exponential ,decimal normal number.

let num1 = 255;
let num2 = 255.0;

console.log(typeof num1); //number
console.log(typeof num2); //number

console.log(num1 === num2); //true

let num3 = 0xff; //hexadecimal
console.log(typeof num3);

let num4 = 0b11111111; //binary
console.log(typeof num4);

let num5 = 0.255e3; //exponential
console.log(typeof num5);

console.log(num1 === num2);
console.log(num2 === num3);
console.log(num3 === num4);
console.log(num4 === num5);
