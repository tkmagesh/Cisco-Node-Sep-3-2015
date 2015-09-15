var http = require('http'),
    path = require('path'),
    dataParser = require('./dataParser'),
    staticResourceServer = require('./staticResourceServer'),
    calculatorProcessor = require('./calculatorProcessor'),
    notFoundAction = require('./notFoundAction'),
    app = require('./app');


app.use(dataParser);
app.use(staticResourceServer(path.join(__dirname, './public')));
app.use(calculatorProcessor);
app.use(notFoundAction);

http.createServer(app).listen(9090);

console.log("Server listening on 9090");
