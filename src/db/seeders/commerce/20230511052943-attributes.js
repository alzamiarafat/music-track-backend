'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let attributes = faker.helpers.multiple(createRandomAttributes, { count: 20 });
            await queryInterface.bulkInsert('attributes', attributes);
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

function createRandomAttributes() {
    return {
        title: faker.word.noun(5),
        sequence: faker.number.int(10),
    };
}