'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('stock_histories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            stock_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'stocks',
                    key: 'id'
                }
            },
            transfer_reason_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'transfer_reasons',
                    key: 'id'
                }
            },
            transfer_reason: {
                allowNull: true,
                type: Sequelize.STRING(50)
            },
            order_no: {
                allowNull: true,
                type: Sequelize.STRING(50)
            },
            order_hash: {
                allowNull: true,
                type: Sequelize.STRING(50)
            },
            reference: {
                allowNull: true,
                type: Sequelize.STRING(50)
            },
            reference_date: {
                allowNull: true,
                type: Sequelize.DATE
            },
            onhand_quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            previous_onhand_quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            reserved_quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            previous_reserved_quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            forecasted_quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            previous_forecasted_quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            available_quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            previous_available_quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            created_by: {
                allowNull: false,
                type: Sequelize.JSON,
                defaultValue: {'actor': 'BOT'}
            },
            created_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('stock_histories');
    }
};