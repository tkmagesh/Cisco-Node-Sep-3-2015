/* Sync */

function addSync(x,y){
    console.log("[SP] processing..");
    if (!x || !y){
        throw new Error("Invalid arguments");
        return;
    }
    var result = x + y;
    console.log("[SP] returing result");
    return result;
}

function addSyncClient(x,y){
    try{
        console.log("[SC] triggering add");
        var result = addSync(x,y);
        console.log("[SC] result = ", result);
    } catch (e){
        console.log("[SC] Something went wrong", e);
    }
}


function add(x,y, onResult){
    console.log("[SP] processing..");
    setTimeout(function(){
        if (!x || !y){
            var e =  new Error("Invalid arguments");
            onResult(e, null);
            return;
        }
        var result = x + y;
        console.log("[SP] returing result");
        onResult(null, result);
    },3000);
}

function addClient(x,y){
    console.log("[SC] triggering add");
    add(x,y, function(err, result){
        if (err){
            console.log("[SC] Something went wrong", err);
            return;
        }
        console.log("[SC] result = ", result);
    });
}
module.exports.addSyncClient = addSyncClient;
module.exports.addClient = addClient;
