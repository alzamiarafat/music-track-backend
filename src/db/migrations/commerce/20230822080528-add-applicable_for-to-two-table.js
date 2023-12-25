'use strict';
const { ShippingConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'shipping_methods',
                'applicable_for',
                {
                    allowNull: false,
                    type: Sequelize.ENUM(ShippingConstant.APPLICABLE_FOR_ALL, ShippingConstant.APPLICABLE_FOR_WEB, ShippingConstant.APPLICABLE_FOR_ADMIN, ShippingConstant.APPLICABLE_FOR_POS),
                    defaultValue: ShippingConstant.APPLICABLE_FOR_WEB,
                },
            ),
            await queryInterface.addColumn(
                'shipping_locations',
                'applicable_for',
                {
                    allowNull: false,
                    type: Sequelize.ENUM(ShippingConstant.APPLICABLE_FOR_ALL, ShippingConstant.APPLICABLE_FOR_WEB, ShippingConstant.APPLICABLE_FOR_ADMIN, ShippingConstant.APPLICABLE_FOR_POS),
                    defaultValue: ShippingConstant.APPLICABLE_FOR_WEB,
                },
            )
        ]
    }
};