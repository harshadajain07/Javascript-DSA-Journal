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
