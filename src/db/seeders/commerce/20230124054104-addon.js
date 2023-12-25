'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        if (env === 'development') {
            let addons = faker.helpers.multiple(createRandomAddons, { count: 20 });
            await queryInterface.bulkInsert('addons', addons);
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
function createRandomAddons() {
    return {
        title: faker.word.noun(8),
        price: faker.number.int({ min: 100, max: 1000 }),
        attachment_id: faker.number.int(100),
        description: faker.lorem.paragraph(1)
    };
}
