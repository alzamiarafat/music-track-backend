'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('attribute_values', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            attribute_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'attributes',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            value: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            color_code: {
                type: Sequelize.STRING(20),
                defaultValue: 'null'
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
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
        await queryInterface.dropTable('attribute_values');
    }
};