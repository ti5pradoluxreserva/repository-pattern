const express = require("express");

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require("./controllers/ReportController");
//const UserController = require('./controllers/SetupControoler');
const SetupControoler = require("./controllers/SetupControoler");
const ProductsController = require("./controllers/ProductsController");

const routes = express.Router();

routes.post('/setup', SetupControoler.store)
routes.get('/setup', SetupControoler.index)

routes.post('/products', ProductsController.store);
routes.get('/products', ProductsController.index)

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/addresses', AddressController.index)
routes.post('/users/:user_id/addresses', AddressController.store)

routes.get('/users/:user_id/techs', TechController.index)
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show);

module.exports= routes