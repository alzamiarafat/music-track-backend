'use strict';
const { StatusConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('lots', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            lot_no: {
                type: Sequelize.STRING(50)
            },
            po_id: {
                type: Sequelize.INTEGER
            },
            received_date: {
                type: Sequelize.DATE
            },
            discount: {
                type: Sequelize.DOUBLE
            },
            descriptions: {
                type: Sequelize.TEXT
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_PENDING, StatusConstant.STATUS_ACCEPTED),
                defaultValue: StatusConstant.STATUS_PENDING,
            },
            sequence: {
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('lots');
    }
};