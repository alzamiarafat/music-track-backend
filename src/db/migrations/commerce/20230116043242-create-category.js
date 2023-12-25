'use strict';
const { StatusConstant } = require('../../../app/constant')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('categories', {
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
            is_inventory: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            color: {
                type: Sequelize.STRING(20),
            },
            items_count: {
                type: Sequelize.INTEGER,
            },
            slug: {
                type: Sequelize.STRING(60),
                unique: true
            },
            language: {
                type: Sequelize.STRING(20),
            },
            meta_title: {
                type: Sequelize.STRING(30),
            },
            meta_tags: {
                type: Sequelize.STRING
            },
            meta_description: {
                type: Sequelize.TEXT,
            },
            parent_id: {
                type: Sequelize.INTEGER,
            },
            attachment_id: {
                type: Sequelize.INTEGER,
            },
            icon_id: {
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
    async down(queryInterface) {
        await queryInterface.dropTable('categories');
    },
};
