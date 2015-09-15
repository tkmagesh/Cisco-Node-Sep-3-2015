var path = require('path'),
    fs = require('fs');

var staticResourceExtns = ['.html','.css','.js','.jpg','.png','.ico','.json','.txt','.xml'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        fs.exists(resourcePath, function(exists){
            if (!exists){
                res.statusCode = 404;
                res.end();
                return;
            }
            fs.createReadStream(resourcePath).pipe(res);
        });
    }
}
