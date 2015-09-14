var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    qs = require('querystring'),
    calculator = require('./calculator');

/*
1. data parsing - dataParser
2. serving static resources - staticResourceServer
3. service calculator requests - calculatorProcessor
4. not found - notFoundAction
*/

var staticResourceExtns = ['.html','.css','.js','.jpg','.png','.ico','.json','.txt','.xml'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
    var urlObject = url.parse(req.url, true);
    if (isStatic(urlObject.pathname)){
        var resourcePath = path.join(__dirname, req.url);
        fs.exists(resourcePath, function(exists){
            if (!exists){
                res.statusCode = 404;
                res.end();
                return;
            }
            fs.createReadStream(resourcePath).pipe(res);
        });
    } else if (urlObject.pathname === '/calculator' && req.method === 'GET'){
        var data = urlObject.query,
            n1 = parseInt(data.n1, 10),
            n2 = parseInt(data.n2, 10);
        var result = calculator[data.operation](n1, n2);
        res.write(result.toString());
        res.end();
    }  else if (urlObject.pathname === '/calculator' && req.method === 'POST'){
        var dataStr = '';
        req.on('data', function(chunk){
            dataStr += chunk;
        });
        req.on('end', function(){
            var data = qs.parse(dataStr),
                n1 = parseInt(data.n1, 10),
                n2 = parseInt(data.n2, 10);
            var result = calculator[data.operation](n1, n2);
            res.write(result.toString());
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(9090);
console.log("Server listening on 9090");
