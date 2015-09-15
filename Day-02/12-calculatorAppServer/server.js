var http = require('http'),
    dataParser = require('./dataParser'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundAction = require('./notFoundAction'),
    app = require('./app');


app.use(dataParser);
app.use(staticResourceServer);
app.use(calculatorProcessor);
app.use(notFoundAction);

http.createServer(app).listen(9090);

console.log("Server listening on 9090");
