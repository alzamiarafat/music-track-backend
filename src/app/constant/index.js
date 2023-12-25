'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const constants = {};

const folders = [
    path.join(__dirname, './validator'),
    path.join(__dirname, './commerce')

]

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
        const constant = require(path.join(__dirname, file));
        if (constant.name) {
            constants[constant.name] = constant;
        }
    });


for (let i = 0; i < folders.length; i++) {
    const validatorPath = folders[i];
    fs.readdirSync(validatorPath)
        .filter((file) => {
            return file.indexOf(".") !== 0 && file.slice(-3) === ".js";
        })
        .forEach((file) => {
            const repository = require(path.join(validatorPath, file));
            if (repository.name) {
                constants[repository.name] = repository;
            }
        });
}

module.exports = constants;
