// NOTE: We compile ES6 on the server at runtime, but not this module.
require('babel-core/register');

var throng = require('throng');
var start = require('./app').start;
var config = require('./app/config');

throng(start, {
  workers: config.workers,
  lifetime: Infinity,
});
