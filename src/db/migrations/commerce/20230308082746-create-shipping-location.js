'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('shipping_locations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
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
        await queryInterface.dropTable('shipping_locations');
    }
};