 


const capitalizeText = (input) => {
  if (typeof input !== "string"){
    throw new TypeError("parameter should be string")
  };
  return input[0].toUpperCase() + input.slice(1).toLowerCase() ;
};


module.exports = {capitalizeText};
  
  
  