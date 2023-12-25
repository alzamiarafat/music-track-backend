'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'stock_transfers',
            'ready_by',
            {
                allowNull: true,
                type: Sequelize.STRING(10),
                defaultValue: null
            },
        )
    }
};
