const index = require("../index"); // sum, convertToarray

const assertMocha = require("assert"); 

// const expect = require("chai").expect;
// const assert = require("chai").assert;
// const should = require("chai").should();



describe("test for sum function using mocha" , function(){
    // testcase 
    it("test that sum function takes two positive numbers and return it's summtion", function(){
            assertMocha.equal(index.sum(3,3), 6);
    })

//     it("test that sum function takes two negative numbers and return it's summtion", function(){
//         assertMocha.equal(index.sum(-3,-3), -6);
// })


})
