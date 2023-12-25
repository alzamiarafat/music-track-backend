'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let products = faker.helpers.multiple(createRandomProducts, { count: 20 });
            await queryInterface.bulkInsert('products', products);
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

function createRandomProducts() {
    return {
        title: faker.word.noun(6),
        product_type: faker.helpers.arrayElement(['sales', 'purchase']),
        description: faker.lorem.paragraph(1),
        published: faker.helpers.arrayElement(['true', 'false']),
        in_stock_label: faker.helpers.arrayElement(['available']),
        current_stock: faker.number.int({ min: 10, max: 50 }),
        cash_on_delivery: faker.helpers.arrayElement(['true', 'false']),
        refundable: faker.helpers.arrayElement(['true', 'false']),
        meta_description: faker.lorem.paragraph(1),
        meta_title: faker.word.noun(5),
        tag: faker.word.noun(5),
        returnable: faker.helpers.arrayElement(['true', 'false']),
        slug: faker.word.noun(5)
    };
}