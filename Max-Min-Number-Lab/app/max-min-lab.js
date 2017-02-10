function findMinMax(listOfNums) {
  var minMax = [];
  minMax.push(listOfNums.reduce((a,b) => a < b ? a : b));
  minMax.push(listOfNums.reduce((a,b) => a > b ? a : b));

//If the two items in minMax are the same, just return an array containing the first element
  if (minMax[0] === minMax[1]) {
    return [listOfNums[0]];
  }

  return minMax;
}

module.exports = findMinMax;
