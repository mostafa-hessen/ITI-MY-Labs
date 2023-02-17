function sum(x,y){
    return x+y;
}


function convertToArray(x,z,y,t){
    return [x,z,y,t];
}


function add(){
        // no params == return 0 
        // params --> string --> throw error 
        // numbers --> sumtion
// add(4) add(rhdbjh) add(dfr6556)
        if(arguments.length == 0){
            return 0;
        }else{
            var result = 0;
            for(var i = 0; i < arguments.length; i++){
                if(isFinite(arguments[i])){
                    result += arguments[i]
                }else{
                    var err = new TypeError("add function expect number only ")
                    throw err
                }
            }
            return result;
        }
}



module.exports = {sum, convertToArray, add};