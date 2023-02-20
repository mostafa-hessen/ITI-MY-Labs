// const { required } = require("nodemon/lib/config");

const Math=require('../myIndex')


describe("testing math utilities", () => {
    let posVals;
    let negVals;
    let vals;
    let sum_of_vals;
  
    // at before all assign pos vals with array of positive numbers,
  
    beforeAll(()=>{
        posVals=[1,2,3,5]
    })
    
    // and assign negative vals with negative array of numbers,
    beforeAll(()=>{
        negVals=[-1,-2,-3,-5]
    })

  
    
    // at before each console.log all vals
    beforeEach(()=>{
        console.log(posVals,negVals);
    })
   
    // at after each console.log done
    afterEach(()=>{
        console.log('done');
    })
  
    // at after all set all variables to 0

    afterAll(()=>{
        negVals=0
        posVals=0
        console.log(posVals,negVals);

    })

  
    it("sum function should equal to sum of the values", () => {
  
    });
  
    it("positive function should equal to positive values", () => {
  
  
    });
  });
  