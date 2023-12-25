'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('purchase_order_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            order_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'purchase_orders',
                    key: 'id'
                }
            },
            purchase_request_details_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'purchase_request_details',
                    key: 'id'
                }
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'products',
                    key: 'id'
                }
            },
            product_variant_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            product_name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            product_variant_name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            product_qty: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            cost_price: {
                type: Sequelize.DOUBLE,
                defaultValue: 0.0
            },
            trade_price: {
                type: Sequelize.DOUBLE,
                defaultValue: 0.0
            },
            subtotal_price: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            total_price: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            tax: {
                type: Sequelize.FLOAT,
                defaultValue: 0
            },
            invoice_qty: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            received_qty: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            vendor_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            delivery_date: {
                allowNull: false,
                type: Sequelize.DATE,
                comment: 'date planned / scheduled date'
            },
            status: {
                type: Sequelize.ENUM(
                    StatusConstant.STATUS_PENDING,
                    StatusConstant.STATUS_AUTHORIZED,
                    StatusConstant.STATUS_REJECTED,
                    StatusConstant.STATUS_APPROVED
                ),
                defaultValue: StatusConstant.STATUS_PENDING,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('purchase_order_details');
    }
};