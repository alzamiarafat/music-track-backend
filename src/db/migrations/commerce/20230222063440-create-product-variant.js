'use strict';
const { StatusConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('product_variants', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'products',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            type: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            sku: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            sell_price: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            cost_price: {
                type: Sequelize.DOUBLE,
                allowNull: true,
            },
            whole_sale_price: {
                type: Sequelize.DOUBLE,
                allowNull: true,
            },
            stock: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            stock_warning: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            barcode: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            location: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            purchase_order: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            discount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            discount_type: {
                type: Sequelize.ENUM('percent','flat'),
                allowNull: true,
            },
            discount_start_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            discount_end_date: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
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
    async down(queryInterface) {
        await queryInterface.dropTable('product_variants');
    }
};