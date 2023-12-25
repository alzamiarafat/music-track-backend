'use strict';
const { PaymentConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('payment_methods', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            logo: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            key: {
                type: Sequelize.STRING(20),
                allowNull: true,
                unique: true
            },
            sandbox_mode: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            amount_limit: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            discount: {
                type: Sequelize.FLOAT,
                defaultValue: 0.00
            },
            discount_type: {
                type: Sequelize.ENUM,
                allowNull: true,
                values: [PaymentConstant.DISCOUNT_TYPE_FLAT, PaymentConstant.DISCOUNT_TYPE_PERCENT]
            },
            payment_type: {
                type: Sequelize.ENUM,
                allowNull: true,
                values: [PaymentConstant.PAYMENT_TYPE_COD, PaymentConstant.PAYMENT_TYPE_DIGITAL]
            },
            display_in: {
                type: Sequelize.ENUM,
                allowNull: false,
                values: [PaymentConstant.DISPLAY_IN_POS, PaymentConstant.DISPLAY_IN_WEBSITE, PaymentConstant.DISPLAY_IN_BOTH]
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            status: {
                type: Sequelize.ENUM,
                values: [PaymentConstant.STATUS_ACTIVE, PaymentConstant.STATUS_INACTIVE],
                defaultValue: PaymentConstant.STATUS_ACTIVE
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
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('payment_methods');
    }
};