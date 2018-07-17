var Sequelize = require('sequelize');
var sequelize = require('./conn');


var user = require('./sequelize_models/user')

exports.User = user(sequelize, Sequelize);