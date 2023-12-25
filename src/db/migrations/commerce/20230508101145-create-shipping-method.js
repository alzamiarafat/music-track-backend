'use strict';
const { StatusConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('shipping_methods', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false,
                validate: {
                    notNull: { msg: 'Title is required.' },
                    len: {
                        args: [2, 100],
                        msg: 'Title should be 2-100 characters length.',
                    },
                },
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
            shipping_location_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'shipping_locations',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            delivery_type_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'delivery_types',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            courier_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'couriers',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            charge: {
                type: Sequelize.DOUBLE
            },
            purchase_limit: {
                type: Sequelize.DOUBLE
            },
            description: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('shipping_methods');
    }
};