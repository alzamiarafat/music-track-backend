'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('stocks', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            product_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                // references: {
                //     model: 'products',
                //     key: 'id'
                // }
            },
            product_variant_id: {
                type: Sequelize.INTEGER,
                allowNull:false,
                // references: {
                //     model: 'product_variants',
                //     key: 'id'
                // },
            },
            lot_id: {
                type: Sequelize.INTEGER,
                allowNull:true,
            },
            onhand_quantity: {
                type: Sequelize.INTEGER,
                allowNull:false,
                defaultValue: 0
            },
            reserved_quantity: {
                type: Sequelize.INTEGER,
                allowNull:false,
                defaultValue: 0
            },
            forecasted_quantity: {
                type: Sequelize.INTEGER,
                allowNull:false,
                defaultValue: 0
            },
            available_quantity: {
                type: Sequelize.INTEGER,
                allowNull:false,
                defaultValue: 0
            },
            warehouse_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'warehouses',
                    key: 'id'
                }
            },
            location_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'locations',
                    key: 'id'
                }
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
        await queryInterface.dropTable('stocks');
    }
};