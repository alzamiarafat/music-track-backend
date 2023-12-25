'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('loyalties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(50),
            },
            reward_type: {
                allowNull: false,
                type: Sequelize.ENUM(
                    StatusConstant.TYPE_GIFT,
                    StatusConstant.TYPE_FLAT,
                    StatusConstant.TYPE_PERCENT
                ),
                defaultValue: StatusConstant.TYPE_FLAT
            },
            earning_cost: {
                type: Sequelize.DOUBLE,
                defaultValue: 0,
            },
            minimum_order_amount: {
                type: Sequelize.DOUBLE,
                defaultValue: 0,
            },
            amount_per_point: {
                type: Sequelize.DOUBLE,
                defaultValue: 0.00,
            },
            point_rounding: {
                type: Sequelize.DOUBLE,
                defaultValue: 0.00,
            },
            is_default: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE
            },
            created_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE,
            },
            deleted_at: {
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('loyalties');
    }
};