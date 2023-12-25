'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let pages = faker.helpers.multiple(createRandomPages, { count: 20 });
            await queryInterface.bulkInsert('pages', pages);
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

function createRandomPages() {
    return {
        title: faker.word.noun(5),
        meta_title: faker.word.noun(5),
        meta_description: faker.lorem.paragraph(1),
        description: faker.lorem.paragraph(1),
    };
}