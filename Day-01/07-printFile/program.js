var fs = require('fs');

var filename = process.argv[2];
if (!filename) {
    console.log('invalid arguments');
    process.exit(1);
}
fs.exists(filename, function(exists){
    if (!exists){
        console.log('invalid filename');
        process.exit(1);
    }
    /*
    var fileContents = fs.readFileSync(filename, {encoding : 'utf8'});
    console.log(fileContents);
    console.log("done");
    */

    fs.readFile(filename, {encoding : 'utf8'}, function(err, fileContents){
        if (err){
            console.log(err);
            process.exit(1);
        };
        console.log(fileContents);
        console.log("done");
    });
});
