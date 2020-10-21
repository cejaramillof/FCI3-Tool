const express = require('express');
const DBConnection = require('./interfaces/DBInterface').Connection;
const routers = require('./routers');
const httpLogger = require('./middleware/httpLogger');

// Database connection init
DBConnection.init();

// Initialization
const app = express();

// Express configuration
app.use(express.json());

// http logger
app.use(httpLogger);

// Routers
Object.keys(routers).forEach((path) => (app.use(`/${path}`, routers[path])));

module.exports = app;
