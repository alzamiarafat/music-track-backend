'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'payment_transactions',
            'change_amount',
            {
                allowNull: true,
                type: Sequelize.DOUBLE,
                defaultValue: 0,
            },
        )
    }
};
