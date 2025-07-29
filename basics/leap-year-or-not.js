//Check if a year is a leap year
function isLeapYear(year) {
  if (((year % 4 == 0) & (year % 100 != 0)) | (year % 400 == 0)) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}
let result = isLeapYear(2000);
console.log(result);
result = isLeapYear(2023);
console.log(result);
