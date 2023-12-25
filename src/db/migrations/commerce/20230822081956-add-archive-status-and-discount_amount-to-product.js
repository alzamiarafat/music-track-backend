'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'products',
            'discount_amount',
            {
                allowNull: true,
                type: Sequelize.DOUBLE,
                defaultValue: 0,
            },
        )
    },
};
