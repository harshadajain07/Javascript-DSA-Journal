//Write a function to check whether number is prime or Not
function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return "Not a prime number";
    }
  }
  return "Prime Number";
}

let result = isPrime(29);
console.log(result);

// result = isPrime(20);
// console.log(result);

//Write a function to print first 10 prime number

//Write a function to print all the prime number between 1 to 100
