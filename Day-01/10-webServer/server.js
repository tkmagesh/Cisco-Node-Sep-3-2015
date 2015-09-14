var http = require('http'),
    fs = require('fs'),
    path = require('path');


var server = http.createServer(function(req, res){
    var resourcePath = path.join(__dirname, req.url);
    fs.exists(resourcePath, function(exists){
        if (!exists){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resourcePath).pipe(res);
    });
});

server.listen(9090);
console.log("Server listening on 9090");

