//Arrays
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
