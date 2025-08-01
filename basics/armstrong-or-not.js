function isArmstrong(n) {
  let originalNum = n;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += rem * rem * rem;
    n = Math.floor(n / 10);
  }
  return sum === originalNum;
}

let result = isArmstrong(371);
if (result === true) {
  console.log("Armstrong Number");
} else {
  console.log("Not an Armstrong Number");
}

//Print all armstrong number between 1-1000
