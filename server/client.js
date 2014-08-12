var Router = require('express').Router;

var client = Router();

app.get('/', function (req, res) { });
app.get('/*', function (req, res) { });

module.exports = client;
