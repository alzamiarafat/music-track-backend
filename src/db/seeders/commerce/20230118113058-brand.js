'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let brands = faker.helpers.multiple(createRandomBrands, { count: 10 });
            await queryInterface.bulkInsert('brands', brands);
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

function createRandomBrands() {
    return {
        title: faker.word.noun(5),
        website_link: `https://${faker.internet.domainName()}`,
        attachment_id: faker.number.int(100),
    };
}