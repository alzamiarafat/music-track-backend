'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface) {

        if (env === 'development') {
            let categories = faker.helpers.multiple(createRandomCetagories, { count: 30 });
            await queryInterface.bulkInsert('categories', categories);
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

function createRandomCetagories() {
    return {
        title: faker.word.noun(8),
        status: faker.helpers.arrayElement(['inActive', 'active']),
        slug: faker.word.noun(20),
        description: faker.lorem.paragraph(1),
        color: faker.color.human(),
        meta_title: faker.word.noun(10),
        meta_description: faker.lorem.paragraph(1),
        attachment_id: faker.number.int(100),
    };
}