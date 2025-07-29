function isArmstrong(n) {
  while (n > 0) {
    let sum = 0;
    let rem = n % 10; //371%10  -- 1 // 37%10 = 7 //3%10 = 3
    sum = rem * rem * rem + sum; // 1*1*1 + 0 = 1 // 7*7*7 + 1 = 344 // 3*3*3 + 344 = 371
    n = n / 10; //371/10 = 37. // 37/10 = 3 // 3/10 = 0
  }
  if (sum == n) {
    return "Armstrong number";
  } else {
    return "Not a armstrong number";
  }
}
let result = isArmstrong(371);
console.log(result);

//Print all armstrong number between 1-1000
