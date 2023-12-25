'use strict';
const { ShippingConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'shipping_methods',
            'payment_type',
            {
                allowNull: true,
                type: Sequelize.ENUM(ShippingConstant.PAYMENT_TYPE_COD, ShippingConstant.PAYMENT_TYPE_DIGITAL, ShippingConstant.PAYMENT_TYPE_ALLL),
                defaultValue: ShippingConstant.PAYMENT_TYPE_ALLL
            },
        )
    }
};