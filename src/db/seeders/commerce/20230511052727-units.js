'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let units = faker.helpers.multiple(createRandomUnits, { count: 20 });
            await queryInterface.bulkInsert('units', units);
        }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};

function createRandomUnits() {
    return {
        title: faker.word.noun(5),
        description: faker.lorem.paragraph(1),
        unit_type: faker.number.int(5),
        unit_code: faker.word.noun(3),
        status: faker.helpers.arrayElement(['inactive', 'active']),
    };
}
