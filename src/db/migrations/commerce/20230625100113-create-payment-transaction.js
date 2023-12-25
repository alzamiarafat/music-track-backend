'use strict';
const { PaymentConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('payment_transactions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            customer_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                comment: 'PK:customers.id'
            },
            order_type: {
                allowNull: false,
                type: Sequelize.ENUM(
                    PaymentConstant.PAYMENT_TRANSACTION_ORDER_TYPE_SALE,
                    PaymentConstant.PAYMENT_TRANSACTION_ORDER_TYPE_POS,
                    PaymentConstant.PAYMENT_TRANSACTION_ORDER_TYPE_PO,
                    PaymentConstant.PAYMENT_TRANSACTION_ORDER_TYPE_WALLET,
                    PaymentConstant.PAYMENT_TRANSACTION_ORDER_TYPE_ADMIN,
                    PaymentConstant.PAYMENT_TRANSACTION_ORDER_TYPE_GENERAL,
                ),
                comment:'sales, pos, po,wallet, admin'
            },
            order_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                comment: 'order_id, pos_id, po_id'
            },
            invoice_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'invoices',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            paid_amount: {
                allowNull: false,
                type: Sequelize.DOUBLE,
                defaultValue: 0.00
            },
            store_amount: {
                type: Sequelize.DOUBLE,
                defaultValue: 0.00
            },
            reference: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            trx_id: {
                allowNull: true,
                type: Sequelize.STRING(50),
            },
            bank_trx_id: {
                type: Sequelize.STRING(50),
            },
            refund_ref_id: {
                type: Sequelize.STRING(50),
            },
            payment_date: {
                allowNull: false,
                type: Sequelize.DATE
            },
            payment_method_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            payment_method: {
                allowNull: true,
                type: Sequelize.ENUM(
                    PaymentConstant.PAYMENT_TRANSACTION_PAYMENT_METHOD_CASH,
                    PaymentConstant.PAYMENT_TRANSACTION_PAYMENT_METHOD_BKASH,
                    PaymentConstant.PAYMENT_TRANSACTION_PAYMENT_METHOD_NAGAD,
                    PaymentConstant.PAYMENT_TRANSACTION_PAYMENT_METHOD_CARD,
                    PaymentConstant.PAYMENT_TRANSACTION_PAYMENT_METHOD_SSLCOMMERCE,
                    PaymentConstant.PAYMENT_TRANSACTION_PAYMENT_METHOD_COD
                )
            },
            received_by: {
                allowNull: true,
                type: Sequelize.JSON
            },
            note: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            payment_trx_details: {
                type: Sequelize.JSON
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(
                    PaymentConstant.PAYMENT_TRANSACTION_STATUS_PENDING,
                    PaymentConstant.PAYMENT_TRANSACTION_STATUS_CANCEL,
                    PaymentConstant.PAYMENT_TRANSACTION_STATUS_PAID,
                    PaymentConstant.PAYMENT_TRANSACTION_STATUS_FAILED,
                ),
                defaultValue: PaymentConstant.PAYMENT_TRANSACTION_STATUS_PENDING
            },
            is_return: {
                allowNull: true,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            created_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('payment_transactions');
    }
};