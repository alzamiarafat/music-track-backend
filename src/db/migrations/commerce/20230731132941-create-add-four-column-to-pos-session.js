'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'pos_sessions',
                'cash_amounts',
                {
                    type: Sequelize.FLOAT,
                    defaultValue: 0
                },
            ),
            await queryInterface.addColumn(
                'pos_sessions',
                'bkash_amounts',
                {
                    type: Sequelize.FLOAT,
                    defaultValue: 0
                },
            ),
            await queryInterface.addColumn(
                'pos_sessions',
                'nagad_amounts',
                {
                    type: Sequelize.FLOAT,
                    defaultValue: 0
                },
            ),
            await queryInterface.addColumn(
                'pos_sessions',
                'card_amounts',
                {
                    type: Sequelize.FLOAT,
                    defaultValue: 0
                },
            )
        ]
    }
};