'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('activity_logs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.STRING(100)
            },
            username: {
                type: Sequelize.STRING(100)
            },
            first_name: {
                type: Sequelize.STRING(100)
            },
            last_name: {
                type: Sequelize.STRING(100)
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
                type: Sequelize.JSON
            },
            current_data: {
                type: Sequelize.JSON
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
        await queryInterface.dropTable('activity_logs');
    }
};