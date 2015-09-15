var url = require('url'),
    qs = require('querystring');

module.exports = function(req, res, next){
    req.url = url.parse(req.url, true);
    req.body = {};
    req.field = function(attrName){
        return req.url.query[attrName] || req.body[attrName];
    };

    if (req.method === 'POST'){
        var dataStr = '';
        req.on('data', function(chunk){
            dataStr += chunk;
        });
        req.on('end', function(){
            var data = qs.parse(dataStr);
            req.body = data;
            next();
        });
    } else {
        next();
    }
};
