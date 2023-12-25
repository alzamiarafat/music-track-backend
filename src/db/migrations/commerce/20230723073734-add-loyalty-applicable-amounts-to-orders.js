'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'orders',
            'loyalty_applicable_amounts',
            {
                type:Sequelize.FLOAT,
                allowNull:false,
                defaultValue: 0
            },
        )
    },

    async down(queryInterface, Sequelize) {
        //
    }
};
