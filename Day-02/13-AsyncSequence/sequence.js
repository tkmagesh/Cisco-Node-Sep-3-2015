function f1Sync(){
    console.log("f1Sync is invoked");
}

function f2Sync(){
    console.log("f2Sync is invoked");
}

function f3Sync(){
    console.log("f3Sync is invoked");
}

function f4Sync(){
    console.log("f4Sync is invoked");
}

function syncRun(){
    f1Sync();
    f2Sync();
    f3Sync();
    f4Sync();
}



module.exports.syncRun = syncRun;

/*Async*/
function f1(next){
    console.log("f1 is triggered");
    setTimeout(function(){
        console.log("f1 is completed");
        next();
    }, 3000)
}

function f2(next){
    console.log("f2 is triggered");
    setTimeout(function(){
        console.log("f2 is completed");
        next();
    }, 3000)
}

function f3(next){
    console.log("f3 is triggered");
    setTimeout(function(){
        console.log("f3 is completed");
        next();
    }, 3000)
}

function f4(next){
    console.log("f4 is triggered");
    setTimeout(function(){
        console.log("f4 is completed");
        next();
    }, 3000)
}

function run(){
    /*f1(function(){
        f2(function(){
            f3(function(){
                f4();
            });
        });
    });*/
    var fns = [ f1, f2, f3, f4 ];
    exec(fns);
}

function exec(fns){
    var first = fns[0],
        remaining = fns.slice(1),
        next = function(){
            exec(remaining);
        };
    if (first)
        first(next);
}

module.exports.run = run;
