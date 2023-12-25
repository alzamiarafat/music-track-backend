'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('purchase_request_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            purchase_request_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'purchase_requests',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            product_variant_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            product_name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            product_variant_name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            qty: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            received_qty: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            sell_price: {
                type: Sequelize.DOUBLE,
                allowNull: false
            },
            trade_price: {
                type: Sequelize.DOUBLE,
                allowNull: false
            },
            cost_price: {
                type: Sequelize.DOUBLE,
                allowNull: false
            },
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
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
        await queryInterface.dropTable('purchase_request_details');
    }
};