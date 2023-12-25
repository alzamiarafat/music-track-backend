'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let specifications = faker.helpers.multiple(createRandomSpecifications, { count: 10 });
            await queryInterface.bulkInsert('specifications', specifications);
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

function createRandomSpecifications() {
    return {
        title: faker.word.noun(5),
        category_id: faker.number.int({ min: 1, max: 20 }),
    };
}