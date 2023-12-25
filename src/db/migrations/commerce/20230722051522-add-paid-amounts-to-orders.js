'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'orders',
                'paid_amounts',
                {
                    type:Sequelize.FLOAT,
                    allowNull:false,
                    defaultValue: 0
                },
            )
        ]
    }
};
