'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        queryInterface.changeColumn(
            'product_variants',
            'discount',
            {
                type: Sequelize.DOUBLE,
                allowNull: true,
            }
        )
    },
};
