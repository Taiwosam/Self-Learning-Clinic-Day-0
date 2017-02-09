(function(){
  'use strict';
  var aritGeo = require('../app/aritGeo.js');

  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(aritGeo([])).toEqual(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]", function() {
        expect(aritGeo([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32]", function() {
        expect(aritGeo([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23])).toEqual('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
      });

      it("should return `Geometric` for [4, 8, 16, 32, 64, 128, 256, 512, 1024]", function() {
        expect(aritGeo([4, 8, 16, 32, 64, 128, 256, 512, 1024])).toEqual('Geometric');
      });

      it("should return `Geometric` for [4, 8, 16, 32, 64, 128, 256, 512, 1024]", function() {
        expect(aritGeo([4, 8, 16, 32, 64, 128, 256, 512, 1024])).toEqual('Geometric');
      });

      it("should return `Geometric` for [5, 10, 20, 40, 80, 160]", function() {
        expect(aritGeo([5, 10, 20, 40, 80, 160])).toEqual('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
      });

      it("should return -1 for [2, 1, 5, 4, 6]", function() {
        expect(aritGeo([2,1, 5, 4, 6])).toEqual(-1);
      });

      it("should return -1 for [10, 3, 84, 12]", function() {
        expect(aritGeo([10, 3, 84, 12])).toEqual(-1);
      });

    });
  });
})();
