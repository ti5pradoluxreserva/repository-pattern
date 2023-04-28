const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Setup = require('../models/Setup')
const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech');
const Products = require('../models/Products');

const connection = new Sequelize(dbConfig);

Setup.init(connection);
Products.init(connection);
User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Tech.associate(connection.models)

module.exports = connection;