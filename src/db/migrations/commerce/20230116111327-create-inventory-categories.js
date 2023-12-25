'use strict';
const { StatusConstant } = require('../../../app/constant')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('inventory_categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT,
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            parent_id: {
                type: Sequelize.INTEGER,
            },
            slug: {
                type: Sequelize.STRING(100),
                unique: true
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
        await queryInterface.dropTable('inventory_categories');
    }
};