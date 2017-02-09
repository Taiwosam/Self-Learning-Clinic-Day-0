function findMinMax(listOfNums){
	if (listOfNums.length === 1) { //If the number list contains just one number, return the number itslef
		return listOfNums;
	}

  var minMax = [];
  minMax.push(listOfNums.reduce((a,b) => a < b ? a : b));   //Else: Find the minimum number and put it in minMax
  minMax.push(listOfNums.reduce((a,b) => a > b ? a : b));   //Also find the maximum number and put it in minMax

  if (minMax[0] === minMax[1]) { //If the two items in minMax are the same, just return an array containing the first element
    return [listOfNums[0]];
  }
  return minMax;
}

module.exports = findMinMax;
