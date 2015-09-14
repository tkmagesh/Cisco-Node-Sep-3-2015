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
    var stream = fs.createReadStream(filename, {encoding:'utf8'});
    var readCount = 0;
    stream.on('data', function(fileChunk){
        //console.log(fileChunk);
        ++readCount;
    });

    stream.on('end', function(){
        console.log('done with readCount = ', readCount);
    });
    stream.pipe(process.stdout);
});
