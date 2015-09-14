var http = require('http');

var server = http.createServer(function(req, res){
    console.log("a connection is established for ", req.url);
    /*
    check if req.url exists
    if not
        res.statusCode = 404;
        res.end()
    else
        read the resource
        and write to the res
    endi if

    */
    res.write("<h1>Welcome to the world of node.js</h1>");
    res.end();
});

server.listen(9090);
console.log("Server listening on 9090");
