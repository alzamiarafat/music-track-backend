'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('menu_items', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            menu_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'menus',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            attachment_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'attachments',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            title: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            styles: {
                type: Sequelize.STRING(100)
            },
            link: {
                type: Sequelize.STRING(50)
            },
            parent_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            type_id: {
                type: Sequelize.INTEGER
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            show_child: {
                type: Sequelize.BOOLEAN
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
        await queryInterface.dropTable('menu_items');
    }
};