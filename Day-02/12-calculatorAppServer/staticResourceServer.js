var path = require('path'),
    fs = require('fs');

var staticResourceExtns = ['.html','.css','.js','.jpg','.png','.ico','.json','.txt','.xml'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res, next){
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        fs.exists(resourcePath, function(exists){
            if (!exists){
                res.statusCode = 404;
                res.end();
                return;
            }
            var stream = fs.createReadStream(resourcePath);
            stream.on('data', function(chunk){
                console.log('writing data in staticResourceServer for ' , req.url.pathname);
                res.write(chunk);
            });
            stream.on('end', function(){
                res.end();
            });
        });
    } else {
        next();
    }
}
