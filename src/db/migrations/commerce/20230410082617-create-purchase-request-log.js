'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('purchase_request_logs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            purchase_request_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'purchase_requests',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            user_id: {
                type: Sequelize.STRING(100),
                allowNull: false,
                comment: 'keycloak sub id'
            },
            user_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            status: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
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
        await queryInterface.dropTable('purchase_request_logs');
    }
};