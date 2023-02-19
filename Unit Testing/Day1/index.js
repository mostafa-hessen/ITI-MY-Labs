 


const capitalizeText = (input) => {
  if (typeof input !== "string"){
    throw new TypeError("parameter should be string")
  };
  return input[0].toUpperCase() + input.slice(1).toLowerCase() ;
};



const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

module.exports = {capitalizeText,createArray};
  
  
  