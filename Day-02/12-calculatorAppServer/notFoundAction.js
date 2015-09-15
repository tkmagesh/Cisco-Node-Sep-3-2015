module.exports = function(req, res){
    console.log('not found action for ', req.url.pathname);
    res.statusCode = 404;
    res.end();
}
