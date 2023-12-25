'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('promotion_settings_customers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            promotion_setting_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'promotion_settings',
                    key: 'id'
                }
            },
            customer_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'customers',
                    key: 'id'
                }
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE,
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('promotion_settings');
    }
};