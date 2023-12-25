'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('lot_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            lot_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'lots',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'products',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            total_quantity: {
                type: Sequelize.INTEGER
            },
            received_quantity: {
                type: Sequelize.INTEGER
            },
            unit_price: {
                type: Sequelize.DOUBLE
            },
            total_price: {
                type: Sequelize.DOUBLE
            },
            expired_date: {
                type: Sequelize.DATE
            },
            sequence: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('lot_details');
    }
};