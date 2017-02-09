function geometricProgression(numberArray) {
  for (var i = 0; i < numberArray.length - 2; i++) {
    if (numberArray[i] * numberArray[i+2] !== Math.pow(numberArray[i + 1], 2)) {
      return false;
    }
    else {
      return true;
    }
  }
}

function arithmeticProgression(numberArray) {
	var diff = numberArray[1] - numberArray[0];
  var notArithmetic = numberArray.find((number, index) => numberArray[index+1] - number !== diff);
  if (notArithmetic) {
  	return false;
  }
  else {
  	return true;
  }
}


function aritGeo(numberArray) {
  if(numberArray.length === 0) {
    return 0;
  }
  if (geometricProgression(numberArray)) {
    return 'Geometric';
  }
  else if (arithmeticProgression(numberArray)) {
    return 'Arithmetic';
  }
  else {
    return -1;
  }
}

module.exports = aritGeo;
