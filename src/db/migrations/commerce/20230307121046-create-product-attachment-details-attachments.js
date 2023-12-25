'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('product_attachment_details_attachments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            attachment_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'attachments',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            product_attachment_details_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'product_attachment_details',
                    key: 'id'
                },
                onDelete: 'CASCADE',
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('product_attachment_details_attachments');
    }
};