'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('additional_charges', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                len: [2, 50],
                allowNull: false,
                unique: true
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            type: {
                type: Sequelize.ENUM(StatusConstant.TYPE_FLAT, StatusConstant.TYPE_PERCENT),
            },
            action: {
                type: Sequelize.ENUM(StatusConstant.ACTION_ADDITION, StatusConstant.ACTION_SUBTRACTION),
            },
            charge_amount: {
                type: Sequelize.DOUBLE,
            },
            amount: {
                type: Sequelize.DOUBLE,
            },
            sequence: {
                type: Sequelize.INTEGER,
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
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('additional_charges');
    },
};
