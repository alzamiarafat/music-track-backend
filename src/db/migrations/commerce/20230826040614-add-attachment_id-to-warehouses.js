'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'warehouses',
            'attachment_id',
            {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
        )
    }
};