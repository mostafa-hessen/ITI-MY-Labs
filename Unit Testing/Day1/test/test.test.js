const index = require("../index"); // sum, convertToarray
const assertMocha = require("assert");

const expect = require("chai").expect;
// const assert = require("chai").assert;
// const should = require("chai").should();

// ====== problem 1 =======

describe.skip("test first problem lab1", function () {
  // testcase
  it.skip("test that the function takes a string  it will return a string ", function () {
    expect(index.capitalizeText("iti")).to.be.a("string");
    // not   AssertionError: expected 'HI' to equal 'Hi'+ expected - actual  -HI because  return input.toUpperCase();
  });

  // testcase
  it.skip("test that the function takes a string and return it after capitalize it ", function () {
    expect(index.capitalizeText("iti")).to.be.a("string").to.equal("Iti");
    // not   AssertionError: expected 'HI' to equal 'Hi'+ expected - actual  -HI because  return input.toUpperCase();
  });

  it.skip("test if the function takes number it will throw type error says parameter should be string", () => {
    expect(() => index.capitalizeText(123)).Throw("parameter should be string");
  });

  it("test if the input iti , the returned value  will not equal to hello", () => {
    expect(index.capitalizeText("iti")).to.not.equal("hello");
  });

  it("test that the function takes a string and return it after capitalize it ", function () {
    expect(index.capitalizeText("iti")).to.equal("Iti").to.be.a("string");
    // not   AssertionError: expected 'HI' to equal 'Hi'+ expected - actual  -HI because  return input.toUpperCase();
  });
});
// ====== problem 2 =======

describe.only("test first problem2 lab1", function () {
  beforeEach = () => {
    var x = 1;
    return ++x;
  };
  it("test that the return value of type array ", function () {
    expect(index.createArray(beforeEach()+1)).to.be.a("array");
  });

  it("test if we pass 3 it will return array of length 3 and test it's include 1 ", function () {
    expect(index.createArray(beforeEach()+1))
      .to.be.a("array")
      .that.includes(1)
      .to.have.lengthOf(3);
  });
});
