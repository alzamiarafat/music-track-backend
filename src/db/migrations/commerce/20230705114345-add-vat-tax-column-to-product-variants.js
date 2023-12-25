'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'product_variants',
                'vat',
                {
                    allowNull: true,
                    type: Sequelize.DOUBLE
                },
            ),
            await queryInterface.addColumn(
                'product_variants',
                'tax',
                {
                    allowNull: true,
                    type: Sequelize.DOUBLE
                },
            ),
        ]

    },
    async down(queryInterface, Sequelize) {
        // 
    }
};