'use strict';

const { OrderConstant, InvoiceConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('invoice_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            invoice_id: {
                type: Sequelize.INTEGER,
                allowNull:false,
                references: {
                    model: 'invoices',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            item_type: {
                type: Sequelize.ENUM(
                    OrderConstant.ORDER_ITEM_TYPE_PRODUCT,
                    OrderConstant.ORDER_ITEM_TYPE_FREE_PRODUCT,
                    OrderConstant.ORDER_ITEM_TYPE_PROMOTION,
                    OrderConstant.ORDER_ITEM_TYPE_LOYALTY,
                    OrderConstant.ORDER_ITEM_TYPE_DELIVERY,
                    OrderConstant.ORDER_ITEM_TYPE_PAYMENT_DISCOUNT,
                ),
                allowNull: false,
                defaultValue: OrderConstant.ORDER_ITEM_TYPE_PRODUCT
            },
            item_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            title: {
                type: Sequelize.STRING,
                allowNull: true,
                comment:'product id, offer title or any free text'
            },
            product_variant_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            delivered_quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            invoice_quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            price: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            vat: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            tax: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            discount_type: {
                type: Sequelize.ENUM('percent','flat'),
                allowNull: false,
                defaultValue: 'flat'
            },
            discount_amount: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            sub_total: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            total_price: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            additional_amounts: {
                type: Sequelize.JSON,
                allowNull: true,
                comment: '{promotions: [{}], additional_charges: [{}]}'
            },
            discount_details: {
                type: Sequelize.JSON,
                allowNull: true,
                comment: '{promotions: [{}], product_discount: {}} etc'
            },
            order_type: {
                allowNull: false,
                type: Sequelize.ENUM(
                    OrderConstant.ORDER_TYPE_SALE,
                    OrderConstant.ORDER_TYPE_REFUND,
                    OrderConstant.ORDER_TYPE_EXCHANGE,
                    OrderConstant.ORDER_TYPE_CANCEL,
                ),
                defaultValue: OrderConstant.ORDER_TYPE_SALE,
                comment: 'sale, refund, cancel'
            },
            status: {
                type: Sequelize.ENUM(
                    InvoiceConstant.INVOICE_DETAILS_STATUS_DRAFT,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_RECEIVED,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_CANCELLED,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_DELIVERED,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_CONFIRMED,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_PROCESSING,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_READY_TO_SHIP,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_SHIPPED,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_FAILED_DELIVERY,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_EX_PROCESSING,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_EX_SHIPPED,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_EX_DELIVERY,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_REFUND_REQUESTED,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_REFUND_PROCESSING,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_REFUNDED,
                    InvoiceConstant.INVOICE_DETAILS_STATUS_EXCHANGE_REJECTED,
                ),
                allowNull: false,
                defaultValue: OrderConstant.INVOICE_DETAILS_STATUS_DRAFT,
            },
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
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
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('invoice_details');
    }
};