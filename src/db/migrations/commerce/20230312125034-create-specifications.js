'use strict';
const { StatusConstant } = require('../../../app/constant');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('specifications', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true,
                validate: {
                    notNull: { msg: 'Title is required.' },
                    len: {
                        args: [2, 50],
                        msg: 'Title should be 2-50 characters length.',
                    },
                },
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                allowNull: false,
                defaultValue: StatusConstant.STATUS_INACTIVE,
            },
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
            created_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE,
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('specifications');
    }
};