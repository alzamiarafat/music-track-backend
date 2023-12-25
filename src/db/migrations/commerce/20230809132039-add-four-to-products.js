'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'products',
                'is_dropship',
                {
                    type:Sequelize.BOOLEAN,
                    allowNull:true,
                    defaultValue: false
                },
            ),
            await queryInterface.addColumn(
                'products',
                'promotion_id',
                {
                    type:Sequelize.INTEGER,
                    allowNull:true,
                },
            ),
            await queryInterface.addColumn(
                'products',
                'weight',
                {
                    type:Sequelize.DOUBLE,
                    allowNull:true,
                    defaultValue: 0
                },
            ),
            await queryInterface.addColumn(
                'products',
                'allow_partial_payment',
                {
                    type:Sequelize.BOOLEAN,
                    allowNull:true,
                    defaultValue: false
                },
            ),
        ]
    }
};
