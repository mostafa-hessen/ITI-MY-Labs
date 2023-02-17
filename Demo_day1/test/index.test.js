// const sum = require("../index");

const index = require("../index"); // sum, convertToarray

const assertMocha = require("assert"); 

const expect = require("chai").expect;
const assert = require("chai").assert;
const should = require("chai").should();



describe("test for sum function using mocha" , function(){
    // testcase 
    it("test that sum function takes two positive numbers and return it's summtion", function(){
            assertMocha.equal(index.sum(3,3), 6);
    })

    it("test that sum function takes two negative numbers and return it's summtion", function(){
        assertMocha.equal(index.sum(-3,-3), -6);
})



})
// mocha --> run test 
// chai --> more functions 


describe("test sum function using chai", function(){
    it("takes 2 positive numbers using EXPECT",function(){
        expect(index.sum(2,2)).to.be.equal(4);
    })

    it("takes 2 positive numbers using ASSERT",function(){
        assert.equal(index.sum(2,2), 4);
    })

    it("takes 2 positive numbers using SHOULD",function(){
       index.sum(5,5).should.equal(10);
    })

})



describe("test convertToArray using expect", function(){
    it("test that return array ", function(){
        expect(index.convertToArray(1,2,4,5)).to.be.an("array").that.have.lengthOf(4).that.have.includes(5) // chainble
    })

    it.skip("length of array is equal 4", function(){
        expect(index.convertToArray(3,3,4,5)).to.have.lengthOf(4)
    })

    it.skip("containe params", function(){
        expect(index.convertToArray(1,2,3,4)).to.have.includes(2)
    })


})



describe("test convertToArray using assert", function(){
    it("test that return array ", function(){
        assert.isArray(index.convertToArray(2,2,2,2))
    })

    it("length of array is equal 4", function(){
        assert.lengthOf(index.convertToArray(1,1,1,1), 4) 
    })

    it("containe params", function(){
        assert.include(index.convertToArray(1,1,1,1), 1)
    })
})


describe("test convertToArray using should", function(){
    it("test that return array ", function(){
        index.convertToArray(3,4,5,6).should.be.an("array").that.includes(5).that.lengthOf(4)
    })

    it("length of array is equal 4", function(){
        index.convertToArray(3,4,5,6).should.lengthOf(4)
    })

    it("containe params", function(){
        index.convertToArray(3,4,5,6).should.includes(3)
    })
})


describe.only("test add function", function(){

    before(() => {
        console.log("BEFORE ALL")
    })

    beforeEach(() => {
        console.log("BEFORE EACH")

    })

    after(() => {
        console.log("After ALL")
    })
    afterEach(() => {
        console.log("After EACH")
    })

    it("without arguments return 0" , function(){
        expect(index.add()).to.be.equal(0)
    })

    it("with arguments - numbers shoudl return sumtion of number", function(){
        expect(index.add(5,6)).to.be.equal(11)
    })

    it("with arguments - string should throw err", function(){
        expect(function(){
                index.add(1,2,"dfv","dfbj")
            }
        ).to.throw(TypeError, "add function expect number only ")
    })







})