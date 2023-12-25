'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'warehouses',
                'store_title',
                {
                    allowNull: true,
                    type: Sequelize.STRING(150)
                },
            ),
            await queryInterface.addColumn(
                'warehouses',
                'is_store',
                {
                    allowNull: true,
                    type: Sequelize.BOOLEAN
                },
            ),
            await queryInterface.addColumn(
                'warehouses',
                'business_hour',
                {
                    allowNull: true,
                    type: Sequelize.STRING(255)
                },
            ),
        ]

    }
};
