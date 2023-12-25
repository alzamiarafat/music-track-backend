'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant, WarehouseConstant } = require('../../../app/constant');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('warehouses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
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
            slug: {
                allowNull: true,
                type: Sequelize.STRING(100),
                unique: true
            },
            address: {
                allowNull: true,
                type: Sequelize.STRING(255)
            },
            contact: {
                allowNull: true,
                type: Sequelize.STRING(20)
            },
            business_hour_start: {
                allowNull: false,
                type: Sequelize.TIME
            },
            business_hour_end: {
                allowNull: false,
                type: Sequelize.TIME
            },
            map_location: {
                allowNull: true,
                type: Sequelize.STRING(50)
            },
            type: {
                allowNull: false,
                type: Sequelize.ENUM(WarehouseConstant.WAREHOUSE_TYPE_VIRTUAL, WarehouseConstant.WAREHOUSE_TYPE_PHYSICAL),
                defaultValue: WarehouseConstant.WAREHOUSE_TYPE_VIRTUAL
            },
            is_default: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            default_location_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'locations',
                    key: 'id'
                }*/ /*Commented for ignoring reference issue with migration file sequence (warehouse and location)*/
            },
            return_location_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'locations',
                    key: 'id'
                }*/ /*Commented for ignoring reference issue with migration file sequence (warehouse and location)*/
            },
            scrap_location_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'locations',
                    key: 'id'
                }*/ /*Commented for ignoring reference issue with migration file sequence (warehouse and location)*/
            },
            sale_location_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'locations',
                    key: 'id'
                }*/ /*Commented for ignoring reference issue with migration file sequence (warehouse and location)*/
            },
            transit_location_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'locations',
                    key: 'id'
                }*/ /*Commented for ignoring reference issue with migration file sequence (warehouse and location)*/
            },
            in_operation_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            out_operation_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            internal_operation_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            pick_operation_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            pack_operation_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('warehouses');
    }
};