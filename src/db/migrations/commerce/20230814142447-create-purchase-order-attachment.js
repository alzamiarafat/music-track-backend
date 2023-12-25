'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('purchase_order_attachments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            po_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'purchase_orders',
                    key: 'id'
                }
            },
            attachment_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'attachments',
                    key: 'id'
                }
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
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
        await queryInterface.dropTable('purchase_order_attachments');
    }
};