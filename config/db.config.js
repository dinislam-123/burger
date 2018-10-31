const connection = require('./connection.js');
 
const Sequelize = require('sequelize');

const sequelize = new Sequelize(connection.database, connection.username, connection.password, {
  host: connection.host,
  dialect: connection.dialect,
  operatorsAliases: false,
 
  pool: {
    max: connection.max,
    min: connection.pool.min,
    acquire: connection.pool.acquire,
    idle: connection.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.burger = require('../models/user.model.js')(sequelize, Sequelize);
 
 
module.exports = db;