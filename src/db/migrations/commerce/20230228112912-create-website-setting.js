'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('website_settings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(100),
                unique: {
                    args: true,
                    message: 'Title must be unique.',
                },
            },
            content_type: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            value: {
                allowNull: false,
                type: Sequelize.TEXT,
                unique: true,
                validate: {
                    notNull: { msg: 'Value required.' },
                    unique: { msg: 'Value already exist!' },
                },
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            status: {
                type: Sequelize.ENUM(
                    StatusConstant.STATUS_ACTIVE,
                    StatusConstant.STATUS_INACTIVE
                ),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            website_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'websites',
                    key: 'id'
                },
                onDelete: 'restrict',
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
        await queryInterface.dropTable('website_settings');
    }
};