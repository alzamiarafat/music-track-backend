'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('currencies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING(50)
            },
            symbol: {
                type: Sequelize.STRING(30),
                unique: true,
                allowNull: false,
            },
            code: {
                type: Sequelize.STRING(30),
                unique: true,
                allowNull: false,
            },
            exchange_rate: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            extra_rate: {
                type: Sequelize.DOUBLE
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
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
        await queryInterface.dropTable('currencies');
    }
};