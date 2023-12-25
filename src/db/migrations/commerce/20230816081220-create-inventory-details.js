'use strict';
/** @type {import('sequelize-cli').Migration} */
const { InventoryConstant } = require('../../../app/constant');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('inventory_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            inventory_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'inventories',
                    key: 'id'
                }
            },
            company_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            product_qty: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            theoretical_qty: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            product_unit_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            location_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            category_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            product_variant_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            is_editable: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: null
            },
            inventory_date: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.fn('now')
            },
            status: {
                type: Sequelize.ENUM(InventoryConstant.DETAILS_STATUS_DRAFT,
                    InventoryConstant.DETAILS_STATUS_APPROVAL,
                    InventoryConstant.DETAILS_STATUS_APPROVED,
                    InventoryConstant.DETAILS_STATUS_REJECTED),
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