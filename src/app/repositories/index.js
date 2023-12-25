'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const repositories = {};

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
        );
    })
    .forEach((file) => {
        const repository = require(path.join(__dirname, file));
        if (repository.name) {
            repositories[repository.name] = repository;
        }
    });

module.exports = repositories;
