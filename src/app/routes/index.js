'use strict';
const apiRoute = require('./route');

module.exports = (app) => {
    app.use('/', apiRoute);
};
