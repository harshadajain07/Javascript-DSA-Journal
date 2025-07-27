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
