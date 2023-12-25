'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable ('gift-box-settings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            inv_category_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            attribute_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            product_per_box: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
            product_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            sequence: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 1
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
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable ('gift-box-settings');
    },
};
