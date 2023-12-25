'use strict';
const { StatusConstant, CustomerConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('customers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            last_name: {
                type: Sequelize.STRING(50)
            },
            display_name: {
                type: Sequelize.STRING(50)
            },
            phone: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            is_phone_verified: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            phone_verified_at: {
                type: Sequelize.DATE
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
                // unique: true,
            },
            is_email_verified: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            email_verified_at: {
                type: Sequelize.DATE
            },
            password: {
                type: Sequelize.STRING(100)
            },
            customer_type: {
                type: Sequelize.ENUM(CustomerConstant.CUSTOMER_TYPE_CUSTOMER, CustomerConstant.CUSTOMER_TYPE_STAFF, CustomerConstant.CUSTOMER_TYPE_CORPORATE),
                defaultValue: CustomerConstant.CUSTOMER_TYPE_CUSTOMER,
                allowNull: false,
            },
            employee_id: {
                type: Sequelize.INTEGER
            },
            device_token: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            avatar: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            referral_code: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            referred_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
                /*references: {
                    model: 'customers',
                    key: 'id'
                }*/
            },
            provider: {
                type: Sequelize.STRING(30),
                allowNull: true
            },
            provider_id: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            provider_response: {
                type: Sequelize.JSON,
                allowNull: true,
            },
            gender: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            street: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            city: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            zip: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            country: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            country_code: {
                type: Sequelize.STRING(5),
                defaultValue: 'BD'
            },
            date_of_birth: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            shipping_location_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                /*references: {
                    model: 'shipping_locations',
                    key: 'id'
                }*/
            },
            loyalty_status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_INACTIVE
            },
            loyalty_activated_from: {
                type: Sequelize.ENUM(CustomerConstant.LOYALTY_ACTIVED_SYSTEM_USER, CustomerConstant.LOYALTY_ACTIVED_CUSTOMER),
                allowNull: true,
            },
            loyalty_activated_by: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            loyalty_activated_date: {
                type: Sequelize.DATE,
            },
            loyalty_id: {
                type: Sequelize.INTEGER,
            },
            total_earned_loyalty_points_pos: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            total_earned_loyalty_points_online: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            total_redeem_loyalty_points_pos: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            total_redeem_loyalty_points_online: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            available_loyalty_points: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            total_occupied_loyalty_points: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            created_at: {
                allowNull: true,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('customers');
    }
};