'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let attribute_values = faker.helpers.multiple(createRandomAttributeValues, { count: 10 });
            await queryInterface.bulkInsert('attribute_values', attribute_values);
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

function createRandomAttributeValues() {
    return {
        value: faker.word.noun(5),
        color_code: faker.color.human(),
        status: faker.helpers.arrayElement(['active']),
        attribute_id: faker.number.int({ min: 1, max: 20 }),
    };
}