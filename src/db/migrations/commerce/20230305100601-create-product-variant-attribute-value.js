'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('product_variant_attribute_values', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            product_variant_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'product_variants',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            attribute_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'attributes',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            attribute_value_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'attribute_values',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0,
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
        await queryInterface.dropTable('product_variant_attribute_values');
    },
};
