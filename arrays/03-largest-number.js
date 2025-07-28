//Write a functions that returns the smallest number in an array.

//let arr = [9, 34, 5, 94, 78, 45];

function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr = [-18, -7, -3]; //-3
let result = findLargest(arr); //94
console.log(result);
