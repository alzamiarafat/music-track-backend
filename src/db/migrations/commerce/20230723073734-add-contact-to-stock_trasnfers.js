'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'stock_transfers',
            'contact',
            {
                allowNull: true,
                type: Sequelize.STRING(50)
            },
        )
    },

    async down(queryInterface, Sequelize) {
        //
    }
};
