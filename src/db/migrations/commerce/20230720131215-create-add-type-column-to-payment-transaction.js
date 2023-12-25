'use strict';
const { PaymentConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'payment_transactions',
            'payment_type',
            {
                type: Sequelize.ENUM(
                    PaymentConstant.PAYMENT_TRANSACTION_TYPE_SALE,
                    PaymentConstant.PAYMENT_TRANSACTION_TYPE_RETURN,
                    PaymentConstant.PAYMENT_TRANSACTION_TYPE_EXCHANGE
                ),
                defaultValue: PaymentConstant.PAYMENT_TRANSACTION_TYPE_SALE
            }
        )
    }
};