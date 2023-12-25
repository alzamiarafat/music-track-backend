'use strict';
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
                type: Sequelize.STRING,
                allowNull: true
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            display_name: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
            },
            is_phone_verified: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            phone_verified_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
            },
            is_email_verified: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            email_verified_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            customer_type: {
                type: Sequelize.ENUM,
                values: ['customer', 'staff'],
                defaultValue: 'customer',
                allowNull: true,
            },
            employee_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            device_token: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            referral_code: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            referred_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'customers',
                    key: 'id'
                }
            },
            provider: {
                type: Sequelize.STRING,
                allowNull: true
            },
            provider_id: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            provider_response: {
                type: Sequelize.JSON,
                allowNull: true,
            },
            gender: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            street: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            zip: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            country: {
                type: Sequelize.STRING,
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
                references: {
                    model: 'shipping_locations',
                    key: 'id'
                }
            },
            loyalty_status: {
                type: Sequelize.ENUM,
                values: ['active', 'inactive'],
                defaultValue: 'inactive',
            },
            loyalty_activated_from: {
                type: Sequelize.ENUM,
                values: ['system_user', 'customer'],
                allowNull: true,
            },
            loyalty_activated_by: {
                type: Sequelize.STRING,
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
                type: Sequelize.STRING,
                allowNull: true,
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