'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('brands', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                len: [2, 50],
                allowNull: false,
                unique: true,
            },
            description: {
                type: Sequelize.TEXT
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            website_link: {
                type: Sequelize.STRING(100)
            },
            attachment_id: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            slug: {
                type: Sequelize.STRING,
                len: [2, 60],
                unique: true
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            deleted_at: {
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('brands');
    }
};