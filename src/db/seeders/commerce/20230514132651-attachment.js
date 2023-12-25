'use strict';

const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let attachments = faker.helpers.multiple(createRandomAttachments, { count: 100 });
            await queryInterface.bulkInsert('attachments', attachments);
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

function createRandomAttachments() {
    return {
        original_name: faker.internet.userName(),
        mime_type: 'image/png',
        path: faker.image.avatar(),
        size: faker.number.int(1000),
        type: faker.helpers.arrayElement(['product', 'meta', 'category']),
    };
}