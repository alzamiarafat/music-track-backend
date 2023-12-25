'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gift_box_attribute_values', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            gift_box_setting_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'gift-box-settings',
                    key: 'id'
                }
            },
            attribute_value_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'attribute_values',
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('gift_box_attribute_values');
    }
};