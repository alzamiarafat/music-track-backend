'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'warehouses',
            'transit_operation_type_id',
            {
                allowNull: true,
                type: Sequelize.INTEGER
            },
        )
    },
    async down(queryInterface, Sequelize) {
        // 
    }
};