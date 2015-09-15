var uuid = require('node-uuid');
var sessionStore = {};


function removeOrphanedSessions(){
    for(var key in sessionStore){
        var sessionObject = sessionStore[key];
        var elapsedTime = new Date() - sessionObject.lastAccessedTime;
        if (elapsedTime >= 60000){
            console.log("session with id ", key, " is being cleared");
            delete sessionStore[key];
        }
    }
}

setInterval(removeOrphanedSessions, 20000);

module.exports = function(req, res, next){

    var sessionId = req.cookies.sessionId;
    if (sessionId && sessionStore[sessionId]){
        sessionStore[sessionId].lastAccessedTime = new Date();
        req.session = sessionStore[sessionId].data;

    } else {
        sessionId = uuid.v1();
        sessionStore[sessionId] = {
            data : {},
            lastAccessedTime: new Date()
        };
        res.cookie('sessionId', sessionId);
        req.session = sessionStore[sessionId].data;
    }
    next();
}
