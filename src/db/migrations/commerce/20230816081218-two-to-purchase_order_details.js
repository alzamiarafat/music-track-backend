'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'purchase_order_details',
                'received_subtotal_price',
                {
                    type: Sequelize.DECIMAL
                },
            ),
            await queryInterface.addColumn(
                'purchase_order_details',
                'received_total_price',
                {
                    type: Sequelize.DECIMAL
                },
            )
        ]
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
