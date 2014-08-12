var Router = require('express').Router;

var client = Router();

client.get('/', function (req, res) { });
client.get('/views/:name', function (req, res) {
  res.render(req.param.name, {}, function (err, html) {
    if (err) throw err;
    res.send(html);
  });
});
client.get('/*', function (req, res) { });

module.exports = client;
