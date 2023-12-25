'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('addons', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING,
                len: [2, 50],
                unique: true,
            },
            sequence: {
                allowNull: true,
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            price: {
                type: Sequelize.DOUBLE,
                defaultValue: 0.00
            },
            attachment_id: {
                type: Sequelize.INTEGER,
            },
            description: {
                allowNull: true,
                type: Sequelize.TEXT
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
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('addons');
    }
};