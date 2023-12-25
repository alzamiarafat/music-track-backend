'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('stock_transfer_details', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            transfer_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'stock_transfers',
                    key: 'id'
                }
            },
            product_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'products',
                    key: 'id'
                }
            },
            product_variant_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'product_variants',
                    key: 'id'
                }
            },
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('stock_transfer_details');
    }
};
