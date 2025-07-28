//Write a functions that returns the smallest number in an array.
//Write a functions that returns the smallest number in an array.

let arr = [9, 34, 5, 94, 78, 45];

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let result = findSmallest(arr); //94
console.log(result);
