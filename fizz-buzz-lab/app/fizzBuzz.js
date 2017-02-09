function fizzBuzz(number) {
  if (typeof(number) !== 'number'){
    throw new Error("fizzBuzz only takes numbers");
  }
  
  if (number % 5 === 0 && number % 3 === 0) {
    return 'FizzBuzz';
  }
  else if (number % 5 === 0) {
    return 'Buzz';
  }
  else if (number % 3 === 0) {
    return 'Fizz';
  }
  else {
    return number;
  }
}

module.exports = fizzBuzz;
