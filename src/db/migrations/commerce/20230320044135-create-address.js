'use strict';
const { LocationConstant } = require('../../../app/constant')

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
                type: Sequelize.STRING(20),
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
            },
            address_label: {
                type: Sequelize.ENUM(LocationConstant.ADDRESS_LABEL_HOME, LocationConstant.ADDRESS_LABEL_OFFICE),
                defaultValue: LocationConstant.ADDRESS_LABEL_HOME
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
