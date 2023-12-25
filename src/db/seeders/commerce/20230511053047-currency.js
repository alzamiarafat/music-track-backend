'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let currencies = faker.helpers.multiple(createRandomCurrencies, { count: 10 });
            await queryInterface.bulkInsert('currencies', currencies);
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

function createRandomCurrencies() {
    return {
        title: faker.word.noun(5),
        symbol: faker.word.noun(5),
        exchange_rate: faker.number.int({ min: 10, max: 50 }),
        code: faker.word.noun(5),
    };
}
