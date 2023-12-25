'use strict';
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
const { faker } = require('@faker-js/faker');

module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let services = faker.helpers.multiple(createRandomServices, { count: 20 });
            await queryInterface.bulkInsert('services', services);
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

function createRandomServices() {
    return {
        title: faker.word.noun(5),
        attachment_id: faker.number.int(100),
        description: faker.lorem.paragraph(1),
    };
}