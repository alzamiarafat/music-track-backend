'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('purchase_orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            po_number: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            user_id: {
                type: Sequelize.STRING,
                allowNull: false
            },
            main_attachment: {
                type: Sequelize.STRING(50),
            },
            notes: {
                type: Sequelize.TEXT,
            },
            origin: {
                type: Sequelize.STRING(50),
            },
            vendor_ref: {
                type: Sequelize.STRING(50),
            },
            vendor_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            from_warehouse_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            from_location_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            to_warehouse_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            to_location_id: {
                type: Sequelize.INTEGER,
                allowNull: false
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
            invoice_count: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            invoice_status: {
                type: Sequelize.STRING(50),
                comment: 'to invoice / no'
            },
            amount_untaxed: {
                type: Sequelize.FLOAT,
                defaultValue: 0.00
            },
            amount_taxed: {
                type: Sequelize.FLOAT,
                defaultValue: 0.00
            },
            amount_total: {
                type: Sequelize.FLOAT,
                defaultValue: 0.00
            },
            currency_id: {
                type: Sequelize.INTEGER,
            },
            picking_count: {
                type: Sequelize.INTEGER,
            },
            picking_type_id: {
                type: Sequelize.INTEGER,
            },
            procurement_group_id: {
                type: Sequelize.INTEGER,
            },
            order_date: {
                allowNull: false,
                type: Sequelize.DATE
            },
            delivery_date: {
                allowNull: false,
                type: Sequelize.DATE
            },
            approval_date: {
                allowNull: true,
                type: Sequelize.DATE
            },
            authorized_by: {
                allowNull: true,
                type: Sequelize.STRING
            },
            approved_by: {
                allowNull: true,
                type: Sequelize.STRING
            },
            security_check_in_time: {
                allowNull: true,
                type: Sequelize.DATE
            },
            security_check_out_time: {
                allowNull: true,
                type: Sequelize.DATE
            },
            security_check_in_by: {
                allowNull: true,
                type: Sequelize.JSON
            },
            security_check_out_by: {
                allowNull: true,
                type: Sequelize.JSON
            },
            lot_number: {
                allowNull: true,
                type: Sequelize.STRING
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
        await queryInterface.dropTable('purchase_orders');
    }
};