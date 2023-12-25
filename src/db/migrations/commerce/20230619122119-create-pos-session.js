'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pos_sessions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            warehouse_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            user_id: {
                allowNull: false,
                type: Sequelize.STRING
            },
            mac_address: {
                allowNull: true,
                type: Sequelize.STRING(30)
            },
            start_time: {
                allowNull: false,
                type: Sequelize.DATE
            },
            opening_balance: {
                allowNull: false,
                type: Sequelize.DOUBLE,
                defaultValue: 0.00
            },
            closing_balance: {
                allowNull: true,
                type: Sequelize.DOUBLE,
                defaultValue: 0.00
            },
            end_time: {
                allowNull: true,
                type: Sequelize.DATE
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE
            },
            created_at: {
                allowNull: true,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: true,
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
        await queryInterface.dropTable('pos_sessions');
    }
};