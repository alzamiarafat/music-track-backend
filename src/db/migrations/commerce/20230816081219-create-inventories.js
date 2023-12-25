'use strict';
/** @type {import('sequelize-cli').Migration} */
const { InventoryConstant } = require('../../../app/constant');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('inventories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull: true
            },
            company_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            filter: {
                type: Sequelize.ENUM(InventoryConstant.FILTER_PRODUCT, InventoryConstant.FILTER_CATEGORY,
                    InventoryConstant.FILTER_PARTIAL, InventoryConstant.FILTER_NONE),
                allowNull: true,
                defaultValue: null
            },
            accounting_date: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: null
            },
            inventory_date: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn('now')
            },
            start_empty: {
                allowNull: true,
                type: Sequelize.BOOLEAN,
                defaultValue: null
            },
            prefill_counted_quantity: {
                type: Sequelize.ENUM(InventoryConstant.INVENTORY_QTY_ZERO, InventoryConstant.INVENTORY_QTY_COUNTED),
                allowNull: true,
                defaultValue: null
            },
            status: {
                type: Sequelize.ENUM(InventoryConstant.INVENTORY_STATUS_DRAFT,
                    InventoryConstant.INVENTORY_STATUS_CONFIRM,
                    InventoryConstant.INVENTORY_STATUS_APPROVAL,
                    InventoryConstant.INVENTORY_STATUS_REJECTED,
                    InventoryConstant.INVENTORY_STATUS_DONE),
                allowNull: true,
                defaultValue: InventoryConstant.INVENTORY_STATUS_DRAFT
            },
            created_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            updated_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
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
        await queryInterface.dropTable('purchase_order_attachments');
    }
};