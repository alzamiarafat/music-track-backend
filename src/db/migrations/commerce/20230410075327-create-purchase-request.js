'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('purchase_requests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            purchase_request_number: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            purchase_request_date: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
                allowNull: false
            },
            from_warehouse_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            to_warehouse_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            delivery_address_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            delivery_date: {
                type: Sequelize.DATE,
                allowNull: true
            },
            status: {
                type: Sequelize.STRING(20),
                allowNull: true
            },
            date_approve: {
                type: Sequelize.DATE,
                allowNull: true
            },
            notes: {
                type: Sequelize.STRING(200),
                allowNull: true
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
        await queryInterface.dropTable('purchase_requests');
    }
};