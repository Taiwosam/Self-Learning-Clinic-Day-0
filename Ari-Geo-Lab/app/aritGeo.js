/**for a geometrically progressive list of numbers,
the product of every first and third number should
equal the square root of the number in-between them
*/
function isGeometricProgression(numbers) {
  for (var i = 0; i < numbers.length - 2; i++) {
    return (numbers[i] * numbers[i+2] === Math.pow(numbers[i + 1], 2))
  }
}

function isArithmeticProgression(numbers) {
	var diff = numbers[1] - numbers[0];

  /**
  the find function finds the first element that satisfies the clause in the function,
  but because it traverses the whole array and tries to check the last element against the non-existent next element, it returns
  true even for arithmetically progressive arrays. Because the last element only gets returned when the list is arithmetically progressive,
  we test for it and return true if it is the one returned. Else, false is returned.
  */
  var arithmetic = numbers.find((number, index) => numbers[index+1] - number !== diff);
  return (arithmetic === numbers[numbers.length - 1]);
}

function aritGeo(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  if (isGeometricProgression(numbers)) {
    return 'Geometric';
  }

  else if (isArithmeticProgression(numbers)) {
    return 'Arithmetic';
  }

  else {
    return -1;
  }
}

module.exports = aritGeo;
