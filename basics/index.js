// "use strict";

let largNum = BigInt(Number.MAX_SAFE_INTEGER); //Max_Interger(n)
let smallNum = BigInt(Number.MIN_SAFE_INTEGER); //-Min_Interger(n)

//using default BigInt() function to avoid issue to increment or decrement number and work with that

console.log(largNum);
console.log(smallNum);

console.log(Number.isSafeInteger(largNum));

largNum++;
console.log(largNum);
console.log(smallNum);
console.log(Number.isSafeInteger(largNum));

let anotherNum = 9087345n;
console.log(typeof anotherNum);
console.log(2 ^ 53);
