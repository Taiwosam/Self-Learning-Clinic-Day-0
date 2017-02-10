'use strict';
var fizzBuzz = require('../app/fizzBuzz.js')

describe("Fizz Buzz tests ", function() {
  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

  it("should return `Buzz` for 35", function() {
    expect(fizzBuzz(35)).toBe('Buzz');
  });

  it("should return `Fizz` for 33", function() {
    expect(fizzBuzz(33)).toBe('Fizz');
  });

  it("should return `FizzBuzz` for 150", function() {
    expect(fizzBuzz(150)).toBe('FizzBuzz');
  });

  describe("The fizzBuzz function only takes a number ", function() {
    it("should return an error for any string", function(){
      expect(function() { fizzBuzz('taiwo'); }).toThrow(new Error("fizzBuzz only takes numbers"));
    });

    it("should return an error for a string containing numbers", function() {
      expect(function() { fizzBuzz('15'); }).toThrow(new Error("fizzBuzz only takes numbers"));
    });
  });
});
