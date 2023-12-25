'use strict';
const { OrderConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            order_number: {
                type: Sequelize.STRING(60),
                allowNull: false,
                unique: true
            },
            order_hash: {
                type: Sequelize.STRING(30),
                allowNull: true,
                comment: 'order hashcode for payment, stock update'
            },
            order_from: {
                type: Sequelize.ENUM(
                    OrderConstant.ORDER_FROM_WEBSITE,
                    OrderConstant.ORDER_FROM_ADMIN,
                    OrderConstant.ORDER_FROM_POS
                ),
                allowNull: false,
                defaultValue: OrderConstant.ORDER_FROM_WEBSITE
            },
            order_location: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            note: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            customer_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            customer_email: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            customer_phone: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            previous_loyalty_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            current_loyalty_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            earned_points: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            redeem_loyalty_points: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            redeem_loyalty_amounts: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            currency_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            currency_rate: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            currency_code: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            tax: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            vat: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            grand_total: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            payable_amount: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            due_amount: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            tracking_code: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            cancel_request: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            cancel_request_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            order_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            delivery_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            expected_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            coupon_discount: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            coupon_code: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            recipient_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            recipient_phone: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            shipping_address_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            shipping_address: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            shipping_location_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            shipping_location: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            city: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            country: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            zip: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            shipping_method_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            shipping_method: {
                type: Sequelize.STRING(80),
                allowNull: true,
            },
            delivery_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            delivery_type: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            courier_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            courier: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            pickup_branch_id: { // Area ID
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            pickup_branch: { //Area Name
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            pickup_district_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            pickup_district: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            shipping_cost: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            payment_method_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            payment_method: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            payment_status: {
                type: Sequelize.ENUM(
                    OrderConstant.PAYMENT_STATUS_PAID,
                    OrderConstant.PAYMENT_STATUS_UNPAID,
                    OrderConstant.PAYMENT_STATUS_PENDING,
                    OrderConstant.PAYMENT_STATUS_FAILD
                ),
                allowNull: true,
                defaultValue: OrderConstant.PAYMENT_STATUS_UNPAID
            },
            payment_details: {
                type: Sequelize.JSON,
                allowNull: true,
                comment: 'response from payment gateway'
            },
            payment_reference: {
                type: Sequelize.STRING,
                allowNull: true,
                comment: 'payment hashcode for digital payment'
            },
            order_reference: {
                type: Sequelize.STRING,
                allowNull: true,
                comment: 'validate by OTP/phone call for reference order'
            },
            customer_reference: {
                type: Sequelize.STRING,
                allowNull: true,
                comment: ''
            },
            reference: {
                type: Sequelize.STRING,
                allowNull: true,
                comment: 'anonymous text(i.e: trx ID, invoice number etc)'
            },
            discount_amounts: {
                type: Sequelize.DOUBLE,
                allowNull: true,
                defaultValue: 0
            },
            security_check_lot_number: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            security_check_in: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            security_check_in_by: {
                type: Sequelize.JSON,
                allowNull: true,
            },
            security_check_out: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            security_check_out_by: {
                type: Sequelize.JSON,
                allowNull: true,
            },
            security_last_operation: {
                type: Sequelize.ENUM(
                    OrderConstant.ORDER_SECURITY_CHECK_STATUS_NONE,
                    OrderConstant.ORDER_SECURITY_CHECK_STATUS_IN,
                    OrderConstant.ORDER_SECURITY_CHECK_STATUS_OUT
                ),
                defaultValue: OrderConstant.ORDER_SECURITY_CHECK_STATUS_NONE
            },
            operation_status: {
                type: Sequelize.ENUM(
                    OrderConstant.OPERATION_STATUS_NEW,
                    OrderConstant.OPERATION_STATUS_VERIFIED,
                    OrderConstant.OPERATION_STATUS_PROCESSING,
                    OrderConstant.OPERATION_STATUS_READY_TO_SHIP,
                    OrderConstant.OPERATION_STATUS_SHIPPED,
                    OrderConstant.OPERATION_STATUS_FAILED_DELIVERY,
                    OrderConstant.OPERATION_STATUS_DELIVERED,
                    OrderConstant.OPERATION_STATUS_EXCHANGE,
                    OrderConstant.OPERATION_STATUS_EX_SECURITY_CHECKED_IN,
                    OrderConstant.OPERATION_STATUS_EXCHANGE_PRODUCT_RECEIVED,
                    OrderConstant.OPERATION_STATUS_EX_VERIFIED,
                    OrderConstant.OPERATION_STATUS_EXCHANGE_NEW_ORDER,
                    OrderConstant.OPERATION_STATUS_EX_PROCESSING,
                    OrderConstant.OPERATION_STATUS_EX_READY_TO_SHIP,
                    OrderConstant.OPERATION_STATUS_EX_SHIPPED,
                    OrderConstant.OPERATION_STATUS_EX_DELIVERY,
                    OrderConstant.OPERATION_STATUS_PARTIAL_REFUND_REQUESTED,
                    OrderConstant.OPERATION_STATUS_FULL_REFUND_REQUESTED,
                    OrderConstant.OPERATION_STATUS_REFUND_SECURITY_CHECKED_IN,
                    OrderConstant.OPERATION_STATUS_REFUND_PRODUCT_RECEIVED,
                    OrderConstant.OPERATION_STATUS_REFUND_DUE,
                    OrderConstant.OPERATION_STATUS_REFUNDED_COMPLETE,
                    OrderConstant.OPERATION_STATUS_POS_PARTIAL_REFUND,
                    OrderConstant.OPERATION_STATUS_POS_FULL_REFUND,
                    OrderConstant.OPERATION_STATUS_POS_EXCHANGE,
                    OrderConstant.OPERATION_STATUS_CANCELLED,
                    OrderConstant.OPERATION_STATUS_POS_NOTRACE_ORDER_DELIVERY,
                    OrderConstant.OPERATION_STATUS_EX_DELIVERED_AND_PRODUCT_RECEIVED,
                    OrderConstant.OPERATION_STATUS_FAILED_DELIVERY_REQUESTED,
                    OrderConstant.OPERATION_STATUS_FAILED_DELIVERY_SECURITY_CHECKED_IN,
                    OrderConstant.OPERATION_STATUS_FAILED_DELIVERY_PRODUCT_RECEIVED,
                    OrderConstant.OPERATION_STATUS_CANCEL_DELIVERY_REQUESTED,
                    OrderConstant.OPERATION_STATUS_CANCEL_DELIVERY_SECURITY_CHECKED_IN,
                    OrderConstant.OPERATION_STATUS_CANCEL_DELIVERY_PRODUCT_RECEIVED,
                    OrderConstant.OPERATION_STATUS_CANCEL_DELIVERY),
                allowNull: true,
                defaultValue: OrderConstant.OPERATION_STATUS_NEW,
                comment: 'delivery status(for backoffice only): new, confirmed, processing, shipped etc.'
            },
            customer_status: {
                type: Sequelize.ENUM(
                    OrderConstant.CUSTOMER_STATUS_DRAFT,
                    OrderConstant.CUSTOMER_STATUS_RECEIVED,
                    OrderConstant.CUSTOMER_STATUS_CANCELLED,
                    OrderConstant.CUSTOMER_STATUS_DELIVERED,
                    OrderConstant.CUSTOMER_STATUS_CONFIRMED,
                    OrderConstant.CUSTOMER_STATUS_PROCESSING,
                    OrderConstant.CUSTOMER_STATUS_READY_TO_SHIP,
                    OrderConstant.CUSTOMER_STATUS_SHIPPED,
                    OrderConstant.CUSTOMER_STATUS_EX_PROCESSING,
                    OrderConstant.CUSTOMER_STATUS_EX_SHIPPED,
                    OrderConstant.CUSTOMER_STATUS_EX_DELIVERY,
                    OrderConstant.CUSTOMER_STATUS_REFUND_REQUESTED,
                    OrderConstant.CUSTOMER_STATUS_REFUND_PROCESSING,
                    OrderConstant.CUSTOMER_STATUS_REFUNDED,
                    OrderConstant.CUSTOMER_STATUS_FAILED_DELIVERY_PROCESSING,
                    OrderConstant.CUSTOMER_STATUS_DELIVERY_FAILED,
                    OrderConstant.CUSTOMER_STATUS_CANCEL_DELIVERY_PROCESSING,
                    OrderConstant.CUSTOMER_STATUS_DELIVERY_CANCELLED),
                allowNull: true,
                defaultValue: OrderConstant.CUSTOMER_STATUS_DRAFT,
                comment: 'delivery status(for customer only): confirmed, processing,shipped etc.'
            },
            status: {
                type: Sequelize.ENUM(
                    OrderConstant.ORDER_STATUS_DRAFT,
                    OrderConstant.ORDER_STATUS_CONFIRMED,
                    OrderConstant.ORDER_STATUS_CANCEL,
                    OrderConstant.ORDER_STATUS_FAILED,
                    OrderConstant.ORDER_STATUS_DONE,
                ),
                allowNull: false,
                defaultValue: OrderConstant.ORDER_STATUS_DRAFT,
                comment: 'order current state: draft(pending/new), waiting(confirmed),ready(shipped), done(delievered)'
            },
            order_type: {
                allowNull: false,
                type: Sequelize.ENUM(
                    OrderConstant.ORDER_TYPE_SALE,
                    OrderConstant.ORDER_TYPE_REFUND,
                    OrderConstant.ORDER_TYPE_EXCHANGE,
                    OrderConstant.ORDER_TYPE_INSTANT_EXCHANGE,
                    OrderConstant.ORDER_TYPE_CANCEL,
                    OrderConstant.ORDER_TYPE_NOTRACE,
                ),
                defaultValue: OrderConstant.ORDER_TYPE_SALE,
                comment: 'sale, refund, cancel'
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
            created_by: {
                allowNull: false,
                type: Sequelize.JSON,
                defaultValue: { 'id': null, 'username': 'Bot' }
            },
            updated_by: {
                allowNull: false,
                type: Sequelize.JSON,
                defaultValue: { 'id': null, 'username': 'Bot' }
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('orders');
    }
};