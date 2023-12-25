'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let tags = faker.helpers.multiple(createRandomTags, { count: 20 });
            await queryInterface.bulkInsert('tags', tags);
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

function createRandomTags() {
    return {
        title: faker.word.noun(5),
        description: faker.lorem.paragraph(1),
        status: faker.helpers.arrayElement(['inActive', 'active']),
    };
}