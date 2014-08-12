var Router = require('express').Router;

var api = Router();

api.get('/profile', function (req, res) { });
api.get('/profile/:id', function (req, res) { });
api.post('/profile', function (req, res) { });
api.put('/profile/:id', function (req, res) { });
api.delete('/profile/:id', function (req, res) { });

api.get('/post', function (req, res) { });
api.get('/post/:id', function (req, res) { });
api.post('/post', function (req, res) { });
api.put('/post/:id', function (req, res) { });
api.delete('/post/:id', function (req, res) { });

module.exports = api;
