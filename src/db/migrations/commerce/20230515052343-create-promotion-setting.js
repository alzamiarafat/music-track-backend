'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant, PromotionConstant } = require('../../../app/constant');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('promotion_settings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING
            },
            user_type: {
                allowNull: false,
                type: Sequelize.ENUM(PromotionConstant.USER_TYPE_GENERAL, PromotionConstant.USER_TYPE_EMPLOYEE, PromotionConstant.USER_TYPE_MANAGEMENT),
                defaultValue: PromotionConstant.USER_TYPE_GENERAL,
            },
            applicable_for: {
                allowNull: false,
                type: Sequelize.ENUM(PromotionConstant.APPLICABLE_FOR_ALL, PromotionConstant.APPLICABLE_FOR_WEB, PromotionConstant.APPLICABLE_FOR_ADMIN, PromotionConstant.APPLICABLE_FOR_POS),
                defaultValue: PromotionConstant.APPLICABLE_FOR_WEB,
            },
            promotion_type: {
                allowNull: false,
                type: Sequelize.ENUM(PromotionConstant.PROMOTION_TYPE_ORDER, PromotionConstant.PROMOTION_TYPE_PRODUCT, PromotionConstant.PROMOTION_TYPE_CUSTOMER),
                defaultValue: PromotionConstant.PROMOTION_TYPE_ORDER,
            },
            promotion_type_ids: {
                allowNull: true,
                type: Sequelize.ARRAY(Sequelize.INTEGER)
            },
            promotion_adjustment: {
                allowNull: false,
                type: Sequelize.ENUM(PromotionConstant.ADJUSTMENT_ADD, PromotionConstant.ADJUSTMENT_SUB),
                defaultValue: PromotionConstant.ADJUSTMENT_SUB
            },
            discount_type: {
                allowNull: false,
                type: Sequelize.ENUM(PromotionConstant.DISCOUNT_TYPE_PERCENT, PromotionConstant.DISCOUNT_TYPE_FLAT),
                defaultValue: PromotionConstant.DISCOUNT_TYPE_FLAT
            },
            amount_type: {
                allowNull: false,
                type: Sequelize.ENUM(PromotionConstant.AMOUNT_TYPE_DISCOUNT, PromotionConstant.AMOUNT_TYPE_CASHBACK),
                defaultValue: PromotionConstant.AMOUNT_TYPE_DISCOUNT,
            },
            discount_amount: {
                allowNull: false,
                type: Sequelize.DOUBLE,
                defaultValue: 0.0,
            },
            payment_method_ids: {
                allowNull: true,
                type: Sequelize.ARRAY(Sequelize.INTEGER)
            },
            show_in_web: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            is_default: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            is_readonly: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            is_loyalty_applicable: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            coupon_code: {
                allowNull: true,
                type: Sequelize.STRING(50),
            },
            min_purchase_amount: {
                allowNull: false,
                type: Sequelize.DOUBLE,
                defaultValue: 0.0,
            },
            max_discount_amount: {
                allowNull: false,
                type: Sequelize.DOUBLE,
                defaultValue: 0.0,
            },
            attachment_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'attachments',
                    key: 'id'
                },
            },
            start_date: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            end_date: {
                allowNull: true,
                type: Sequelize.DATE,
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_INACTIVE,
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