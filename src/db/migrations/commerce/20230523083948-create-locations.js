'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant, LocationConstant } = require('../../../app/constant');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('locations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            warehouse_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'warehouses',
                    key: 'id'
                },
                comment: 'NULLABLE ON location_type: customer_location/ vendor_loaction'
            },
            parent_id: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            short_title: {
                allowNull: true,
                type: Sequelize.STRING(50)
            },
            location_type: {
                allowNull: false,
                type: Sequelize.ENUM(
                    LocationConstant.LOCATION_TYPE_VIEW,
                    LocationConstant.LOCATION_TYPE_INTERNAL,
                    LocationConstant.LOCATION_TYPE_VENDOR,
                    LocationConstant.LOCATION_TYPE_CUSTOMER,
                    LocationConstant.LOCATION_TYPE_PRODUCTION,
                    LocationConstant.LOCATION_TYPE_TRANSIT,
                    LocationConstant.LOCATION_TYPE_INVENTORY_LOSS
                ),
                defaultValue: LocationConstant.LOCATION_TYPE_INTERNAL
            },
            is_default: {
                allowNull: true,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            is_default_sale_location: {
                allowNull: true,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            is_scrap_location: {
                allowNull: true,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            is_return_location: {
                allowNull: true,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            removal_strategy: {
                allowNull: false,
                type: Sequelize.ENUM(
                    LocationConstant.REMOVAL_STRATEGY_FIFO,
                    LocationConstant.REMOVAL_STRATEGY_LIFO,
                    LocationConstant.REMOVAL_STRATEGY_FEFO
                ),
                defaultValue: LocationConstant.REMOVAL_STRATEGY_FIFO
            },
            notes: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            sequence: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 1
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE
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
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('locations');
    }
};