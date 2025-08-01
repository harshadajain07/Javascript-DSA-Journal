function reverseNum(num) {
  let revNum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    console.log(num / 10);
    num = Math.floor(num / 10);
    revNum = revNum * 10 + lastDigit;
    console.log(revNum);
  }
  return revNum;
}
let res = reverseNum(7789);
console.log(res);
