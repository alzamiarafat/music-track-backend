'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'promotion_settings',
                'price_round',
                {
                    allowNull: true,
                    type: Sequelize.DOUBLE,
                    defaultValue: 0,
                },
            ),
            await queryInterface.addColumn(
                'promotion_settings',
                'price_list_id',
                {
                    allowNull: true,
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'price_lists',
                        key: 'id',
                    },
                },
            ),
        ]
    },
};
