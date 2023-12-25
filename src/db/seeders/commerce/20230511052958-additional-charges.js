'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let additional_charges = faker.helpers.multiple(createRandomAdditionalCharges, { count: 20 });
            await queryInterface.bulkInsert('additional_charges', additional_charges);
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

function createRandomAdditionalCharges() {
    return {
        title: faker.word.noun(5),
        status: faker.helpers.arrayElement(['inActive', 'active']),
        type: faker.helpers.arrayElement(['percent', 'flat']),
        charge_amount: faker.number.int({ min: 10, max: 50 }),
        amount: faker.number.int({ min: 100, max: 1000 })
    };
}