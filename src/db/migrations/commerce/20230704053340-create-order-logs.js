'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('order_logs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_data: {
                type: Sequelize.JSON
            },
            action: {
                type: Sequelize.STRING,
            },
            table_name: {
                type: Sequelize.STRING
            },
            table_id: {
                type: Sequelize.INTEGER,
            },
            previous_data: {
                type: Sequelize.TEXT
            },
            current_data: {
                type: Sequelize.TEXT
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
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('order_logs');
    }
};