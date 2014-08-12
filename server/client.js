var Router = require('express').Router;

var client = Router();

app.get('/', function (req, res) { });
app.get('/views/:name', function (req, res) {
  res.render(req.param.name, {}, function (err, html) {
    if (err) throw err;
    res.send(html);
  });
});
app.get('/*', function (req, res) { });

module.exports = client;
