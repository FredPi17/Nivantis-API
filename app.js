import routes from './server/routes';
const express = require('express');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');
const hostname = '0.0.0.0';
const port = 3050;
const app = express(); // setup express application
const server = http.createServer(app);

app.use(logger('dev')); // log requests to the console

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the default API route of Nivantis API',
}));

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
