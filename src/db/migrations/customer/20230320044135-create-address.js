'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('addresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            customer_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'customers',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false
            },
            state: {
                type: Sequelize.STRING
            },
            street: {
                type: Sequelize.STRING
            },
            street2: {
                type: Sequelize.STRING
            },
            zip: {
                type: Sequelize.STRING,
                allowNull: false
            },
            country: {
                type: Sequelize.STRING,
                allowNull: false
            },
            recipient_phone: {
                type: Sequelize.STRING,
                allowNull: false
            },
            recipient_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            is_default_shipping: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            is_default_billing: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            address: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            address_label: {
                type: Sequelize.ENUM,
                values: ['home', 'office'],
                defaultValue: 'home'
            },
            landmark: {
                type: Sequelize.STRING
            },
            shipping_location_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'shipping_locations',
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
        await queryInterface.dropTable('addresses');
    }
};
