module.exports = function(){
    var result = 0;
    return {
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
};
