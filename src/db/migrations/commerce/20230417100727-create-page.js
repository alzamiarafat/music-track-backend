'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING(100)
            },
            description: {
                type: Sequelize.TEXT
            },
            slug: {
                type: Sequelize.STRING(150)
            },
            excerpt: {
                type: Sequelize.STRING(300)
            },
            meta_title: {
                type: Sequelize.STRING(100)
            },
            meta_tags: {
                type: Sequelize.STRING
            },
            meta_description: {
                type: Sequelize.TEXT
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            publish_date: {
                type: Sequelize.DATE
            },
            unpublish_date: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('pages');
    }
};