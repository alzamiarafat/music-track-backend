'use strict';
const { faker } = require('@faker-js/faker');
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        if (env === 'development') {
            let purchaseRequests = faker.helpers.multiple(createRandomPurchaseRequests, { count: 20 });
            await queryInterface.bulkInsert('purchase_requests', purchaseRequests);
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
function createRandomPurchaseRequests() {
    return {
        purchase_request_number: faker.number.int(20),
        purchase_request_date: faker.date.future(),
        sequence: faker.number.int(10),
        delivery_address_id: faker.number.int(10),
        delivery_date: faker.date.future(),
        status: faker.helpers.arrayElement(['inActive', 'active']),
        date_approve: faker.date.soon(),
        notes: faker.lorem.paragraph(1),
    };
}
