//Write a function that return the number of negative number in an array

//test case = let arr = [2,-9,17,0,1,-10,-4,8]
let arr = [2, -9, 17, 0, 1, -10, -4, 8];

function countNegatives(arr) {
  //TODO
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let result = countNegatives(arr); // 3
console.log(result);
