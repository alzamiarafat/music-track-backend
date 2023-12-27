'use strict';
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const { errorMiddleware } = require('./src/app/middleware');
const port = process.env.PORT || 9000;
const path = require('path');
const DB = require('./src/config/db.config');

app.use('/storage', express.static(path.join(__dirname, 'storage')));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));

// Cross Origin Resource Sharing
app.use(cors());

// Database connection
DB.connection();

app.listen(port, () => {
    console.log(`API server started on PORT: ${port}`);
});

// Routes
require('./src/app/routes')(app);

// Error middleware
app.use(errorMiddleware);

// 404 not found
app.use(function (req, res) {
    res.status(404).send({ error: '404 Not Found!' });
});
