'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'purchase_orders',
                'total_qty',
                {
                    type: Sequelize.INTEGER
                },
            ),
            await queryInterface.addColumn(
                'purchase_orders',
                'received_total_qty',
                {
                    type: Sequelize.INTEGER
                },
            ),
            await queryInterface.addColumn(
                'purchase_orders',
                'received_amount_total',
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
