'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant, OperationTypeConstant } = require('../../../app/constant');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('operation_types', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            return_operation_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'operation_types',
                    key: 'id'
                }*/
            },
            type: {
                allowNull: false,
                type: Sequelize.ENUM(OperationTypeConstant.ACTION_MANUFACTURING, OperationTypeConstant.ACTION_INCOMING,
                    OperationTypeConstant.ACTION_INTERNAL, OperationTypeConstant.ACTION_OUTGOING),
                defaultValue: OperationTypeConstant.ACTION_OUTGOING
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            warehouse_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'warehouses',
                    key: 'id'
                }*/
            },
            default_src_location_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'locations',
                    key: 'id'
                }
            },
            default_des_location_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'locations',
                    key: 'id'
                }
            },
            show_entire_packs: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            use_existing_lots: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            show_operations: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            show_reserved: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            barcode: {
                allowNull: true,
                type: Sequelize.STRING(50),
                defaultValue: null
            },
            sequence: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 1
            },
            sequence_code: {
                allowNull: false,
                type: Sequelize.STRING(20)
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE
            },
            created_by: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            updated_by: {
                allowNull: true,
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('operation_types');
    }
};