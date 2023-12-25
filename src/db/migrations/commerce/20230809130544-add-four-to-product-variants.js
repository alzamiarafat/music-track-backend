'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'product_variants',
                'is_dropship',
                {
                    type:Sequelize.BOOLEAN,
                    allowNull:true,
                    defaultValue: false
                },
            ),
            await queryInterface.addColumn(
                'product_variants',
                'promotion_id',
                {
                    type:Sequelize.INTEGER,
                    allowNull:true,
                },
            ),
            await queryInterface.addColumn(
                'product_variants',
                'weight',
                {
                    type:Sequelize.DOUBLE,
                    allowNull:true,
                    defaultValue: 0
                },
            ),
            await queryInterface.addColumn(
                'product_variants',
                'allow_partial_payment',
                {
                    type:Sequelize.BOOLEAN,
                    allowNull:true,
                    defaultValue: false
                },
            )
        ]
    }
};
