var uuid = require('node-uuid');
var sessionStore = {};
module.exports = function(req, res, next){
    var sessionId = req.cookies.sessionId;

    if (sessionId && sessionStore[sessionId]){
        req.session = sessionStore[sessionId];
    } else {
        sessionId = uuid.v1();
        sessionStore[sessionId] = {};
        res.cookie('sessionId', sessionId);
        req.session = sessionStore[sessionId];
    }
    next();
}
