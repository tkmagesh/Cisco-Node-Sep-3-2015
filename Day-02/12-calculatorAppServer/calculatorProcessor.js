var calculator =  require('./calculator'),
    qs = require('querystring');

module.exports = function(req, res, next){
    if (req.url.pathname === '/calculator' && req.method === 'GET'){
        var data = req.url.query,
            n1 = parseInt(data.n1, 10),
            n2 = parseInt(data.n2, 10);
        var result = calculator[data.operation](n1, n2);
        res.write(result.toString());
        res.end();
    }  else if (req.url.pathname === '/calculator' && req.method === 'POST'){
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
        next();
    }
}
