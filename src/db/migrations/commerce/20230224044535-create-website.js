'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('websites', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            slug: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            url: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            status: {
                type: Sequelize.ENUM(
                    StatusConstant.STATUS_ACTIVE,
                    StatusConstant.STATUS_INACTIVE
                ),
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('websites');
    }
};