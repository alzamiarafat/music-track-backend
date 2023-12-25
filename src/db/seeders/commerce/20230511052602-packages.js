'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let product_packages = faker.helpers.multiple(createRandomProductPackages, { count: 20 });
            await queryInterface.bulkInsert('product_packages', product_packages);
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

function createRandomProductPackages() {
    return {
        title: faker.word.noun(10),
        description: faker.lorem.paragraph(1),
        meta_title: faker.word.noun(10),
        meta_description: faker.lorem.paragraph(1),
        slug: faker.number.int(10),
        sequence: faker.number.int(10),
        price: faker.number.int({ min: 100, max: 1000 }),
        status: faker.helpers.arrayElement(['active']),
        code: faker.number.int(100),
        in_stock_label: faker.number.int(100),
        refundable: faker.helpers.arrayElement(['true', 'false']),
    };
}