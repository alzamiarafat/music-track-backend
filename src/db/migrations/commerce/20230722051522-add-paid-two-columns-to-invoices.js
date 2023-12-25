'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'invoices',
                'paid_amounts',
                {
                    type:Sequelize.FLOAT,
                    allowNull:false,
                    defaultValue: 0
                },
            ),
            await queryInterface.addColumn(
                'invoices',
                'due_amounts',
                {
                    type:Sequelize.FLOAT,
                    allowNull:false,
                    defaultValue: 0
                },
            ),
        ]
    }
};
