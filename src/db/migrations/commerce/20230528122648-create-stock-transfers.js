'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StockTransferConstant, SecurityCheckConstant } = require('../../../app/constant');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('stock_transfers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(255)
            },
            transfer_type: {
                allowNull: false,
                type: Sequelize.ENUM(StockTransferConstant.TRANSFER_TYPE_SALE, 
                    StockTransferConstant.TRANSFER_TYPE_SALE_REFUND,
                    StockTransferConstant.TRANSFER_TYPE_INVENTORY,
                    StockTransferConstant.TRANSFER_TYPE_SALE_UPDATE,
                    StockTransferConstant.TRANSFER_TYPE_SALE_EXCHANGE,
                    StockTransferConstant.TRANSFER_TYPE_SALE_CANCELLED,
                    StockTransferConstant.TRANSFER_TYPE_SALE_FAILED_DELIVERY,
                    StockTransferConstant.TRANSFER_TYPE_POS,
                    StockTransferConstant.TRANSFER_TYPE_PO,
                    StockTransferConstant.TRANSFER_TYPE_REFUND_CANCELLED,
                    StockTransferConstant.TRANSFER_TYPE_EXCHANGE_CANCELLED,
                    StockTransferConstant.TRANSFER_TYPE_ADMIN,
                    StockTransferConstant.TRANSFER_TYPE_TRANSFER),
                defaultValue: StockTransferConstant.TRANSFER_TYPE_SALE 
            },
            reference: {
                allowNull: true,
                type: Sequelize.STRING(610)
            },
            operation_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'operation_types',
                    key: 'id'
                }
            },
            location_from: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'locations',
                    key: 'id'
                }
            },
            location_to: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'locations',
                    key: 'id'
                }
            },
            transfer_reason_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'transfer_reasons',
                    key: 'id'
                }
            },
            transfer_reason: {
                allowNull: true,
                type: Sequelize.STRING(255)
            },
            order_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'orders',
                    key: 'id'
                }*/
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(
                    StockTransferConstant.TRASNFER_STATUS_DRAFT,
                    StockTransferConstant.TRASNFER_STATUS_WAITING,//confirmed
                    StockTransferConstant.TRASNFER_STATUS_READY,//assigned
                    StockTransferConstant.TRASNFER_STATUS_CANCEL, //cancel
                    StockTransferConstant.TRASNFER_STATUS_DONE //done
                ),
                defaultValue: StockTransferConstant.TRASNFER_STATUS_DRAFT
            },
            draft_by: {
                allowNull: true,
                type: Sequelize.STRING(100),
                defaultValue: null
            },
            waited_by: {
                allowNull: true,
                type: Sequelize.STRING(100),
                defaultValue: null
            },
            canceled_by: {
                allowNull: true,
                type: Sequelize.STRING(100),
                defaultValue: null
            },
            done_by: {
                allowNull: true,
                type: Sequelize.STRING(100),
                defaultValue: null
            },
            notes: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            customer_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                /*references: {
                    model: 'customers',
                    key: 'id'
                }*/
            },
            customer_name: {
                allowNull: true,
                type: Sequelize.STRING(100)
            },
            shipping_location_id: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            courier_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'couriers',
                    key: 'id'
                }
            },
            courier_tracking_ref: {
                allowNull: true,
                
                type: Sequelize.STRING
            },
            delivery_type_id: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            shipping_method_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'shipping_methods',
                    key: 'id'
                }
            },
            shipping_method_price: {
                allowNull: true,
                type: Sequelize.DOUBLE
            },
            weight: {
                allowNull: true,
                type: Sequelize.DOUBLE
            },
            immediate_transfer: {
                allowNull: true,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            is_locked: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            priority: {
                allowNull: true,
                type: Sequelize.INTEGER,
                defaultValue: 1
            },
            security_check_lot_number: {
                allowNull: true,
                type: Sequelize.STRING(100)
            },
            security_check_type: {
                allowNull: true,
                type: Sequelize.ENUM(SecurityCheckConstant.SECURITY_CHECK_TYPE_IN, SecurityCheckConstant.SECURITY_CHECK_TYPE_OUT),
                defaultValue: null
            },
            security_check_by: {
                allowNull: true,
                type: Sequelize.STRING(100)
            },
            security_checked_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            schedule_date: {
                allowNull: true,
                type: Sequelize.DATE
            },
            done_date: {
                allowNull: true,
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
        await queryInterface.dropTable('stock_transfers');
    }
};
