'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */

        await queryInterface.bulkInsert('admin_settings', [
            {
                title: 'admin_email',
                value: 'admin@info.com'
            },
            {
                title: 'admin_email_cc',
                value: 'admin_cc@info.com, admin_cc1@info.com'
            },
            {
                title: 'default_warehouse',
                value: '1'
            },
            {
                title: 'default_location',
                value: '1'
            },
            {
                title: 'default_customer_location',
                value: '2'
            },
            {
                title: 'multiples_loyalty_points',
                value: '50'
            },
            {
                title: 'minimum_limit_points_for_redeem',
                value: '100'
            },
            {
                title: 'minimum_use_points',
                value: '100'
            },
            {
                title: 'redeem_per_point',
                value: '1'
            },
            {
                title: 'loyalty_days_count',
                value: '365'
            },
            {
                title: 'loyalty_down_grade_status',
                value: 'true'
            },
        ], {});
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
