'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('units', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: Sequelize.STRING,
                len: [2, 20],
                unique: true,
            },
            unit_type: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            unit_code: {
                type: Sequelize.STRING(20),
                unique: true,
            },
            description: {
                type: Sequelize.TEXT
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            icon: {
                type: Sequelize.STRING(50)
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            language: {
                type: Sequelize.STRING(30)
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
        await queryInterface.dropTable('units');
    }
};