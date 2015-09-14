/*
Create a calculator object that exhibits the following methods
    - add(x)
    - subtract(x)
    - multiply(x)
    - divide(x)
    - getResult()
*/

var result = 0;

module.exports = {
    add : function(x){
        result += x;
    },
    subtract : function(x){
        result -= x;
    },
    multiply : function(x){
        result *= x;
    },
    divide : function(x){
        result /= x;
    },
    getResult : function(){
        return result;
    }
};
