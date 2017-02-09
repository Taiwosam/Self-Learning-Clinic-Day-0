function geometricProgression(numbers) {
  for (var i = 0; i < numbers.length - 2; i++) {
    if (numbers[i] * numbers[i+2] !== Math.pow(numbers[i + 1], 2)) { //for a geometrically progressive list of numbers, the product of the every first and third numbers  should
      return false;                                               //equal the square root of the number in-between them
    }
    else {
      return true;
    }
  }
}

function arithmeticProgression(numbers) {
	var diff = numbers[1] - numbers[0];
  var arithmetic = numbers.find((number, index) => numbers[index+1] - number !== diff); //the find function finds the first element that satisfies the clause in the function,
  if (arithmetic === numbers[numbers.length-1]) { //but because it traverses the whole array and tries to check the last element against the non-existent next element, it returns
  	return true;                                             //true even for arithmetically progressive arrays. Because the last element only gets returned when the list is arithmetically progressive,
  }                                                     //we test for it and return true if it is the one returned. Else, false is returned.
  else {
  	return false;
  }
}


function aritGeo(numbers) {
  if(numbers.length === 0) {
    return 0;
  }
  if (geometricProgression(numbers)) {
    return 'Geometric';
  }
  else if (arithmeticProgression(numbers)) {
    return 'Arithmetic';
  }
  else {
    return -1;
  }
}

module.exports = aritGeo;
