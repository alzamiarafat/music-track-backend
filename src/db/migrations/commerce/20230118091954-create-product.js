'use strict';
const { StatusConstant, ProductConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            product_type: {
                allowNull: false,
                type: Sequelize.ENUM(ProductConstant.PRODUCT_TYPE_SALES, ProductConstant.PRODUCT_TYPE_PURCHASE, ProductConstant.PRODUCT_TYPE_BOTH),
                defaultValue: ProductConstant.PRODUCT_TYPE_BOTH,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                len: [2, 150]
            },
            description: {
                type: Sequelize.TEXT,
            },
            details: {
                type: Sequelize.TEXT,
            },
            purchase_description: {
                type: Sequelize.TEXT,
            },
            product_code: {
                type: Sequelize.STRING(100),
            },
            variant_type: {
                allowNull: false,
                type: Sequelize.ENUM(ProductConstant.VARIANT_TYPE_GOODS, ProductConstant.VARIANT_TYPE_SERVICE),
                defaultValue: ProductConstant.VARIANT_TYPE_GOODS,
            },
            sequence: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
            brand_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'brands',
                    key: 'id',
                },
            },
            unit_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'units',
                    key: 'id',
                },
            },
            style_color_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'product_style_colors',
                    key: 'id',
                },
            },
            slug: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                len: [2, 150],
            },
            video_link: {
                type: Sequelize.TEXT,
            },
            external_link: {
                type: Sequelize.TEXT,
            },
            external_link_btn: {
                type: Sequelize.STRING(30),
            },
            meta_title: {
                type: Sequelize.STRING(50),
            },
            meta_tags: {
                type: Sequelize.STRING
            },
            meta_description: {
                type: Sequelize.TEXT,
            },
            is_free: {
                type: Sequelize.BOOLEAN,
            },
            is_addon: {
                type: Sequelize.BOOLEAN,
            },
            min_price: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            max_price: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            is_cod: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            is_refundable: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            is_featured: {
                type: Sequelize.BOOLEAN,
            },
            loyalty_status: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
            inventory_category_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'inventory_categories',
                    key: 'id',
                },
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE, StatusConstant.STATUS_ARCHIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
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
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('products');
    },
};
