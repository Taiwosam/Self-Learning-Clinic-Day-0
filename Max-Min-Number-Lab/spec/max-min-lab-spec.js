(function() {
  'use strict';
  var findMinMax = require('../app/max-min-lab.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [3, 12] for [4, 5, 4, 7, 8, 10, 3, 6, 12]', function() {
        expect(findMinMax([4, 5, 4, 7, 8, 10, 3, 6, 12])).toEqual([3, 12]);
      });

      it('should return [0, 1] for [1, 0, 0, 1, 1, 0]', function() {
        expect(findMinMax([1, 0, 0, 1, 1, 0])).toEqual([0, 1]);
      });
    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [1] for [1, 1, 1, 1]', function () {
        expect(findMinMax([1, 1, 1, 1])).toEqual([1]);
      });

      it('should return [10] for [10, 10, 10]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [7] for [7, 7]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [5] for [5, 5, 5, 5, 5, 5]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
    });

    describe('Return the array itself if the array only contains an element', function () {

      it('should return [4] for [4]', function () {
        expect(findMinMax([4])).toEqual([4]);
      });

      it('should return [1] for [1]', function () {
        expect(findMinMax([1])).toEqual([1]);
      });

      it('should return [10] for [10]', function () {
        expect(findMinMax([10])).toEqual([10]);
      });

      it('should return [7] for [7]', function () {
        expect(findMinMax([7])).toEqual([7]);
      });

      it('should return [5] for [5]', function () {
        expect(findMinMax([5])).toEqual([5]);
      });
    });

    describe('It should work as expected for large numbers', function () {

      it('should return [10000000, 10000009] for [10000000, 10000001, 10000009]', function () {
        expect(findMinMax([10000000, 10000001, 10000009])).toEqual([10000000, 10000009]);
      });

      it('should return [200000000, 200000112] for [200000000, 200000005, 200000112]', function () {
        expect(findMinMax([200000000, 200000005, 200000112])).toEqual([200000000, 200000112]);
      });

    });

  });

})();
