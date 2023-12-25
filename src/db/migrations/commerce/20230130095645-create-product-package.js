'use strict';
const { StatusConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('product_packages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(100)
            },
            code: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            price: {
                allowNull: false,
                type: Sequelize.DECIMAL
            },
            sequence: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            package_start_date: {
                type: Sequelize.DATE
            },
            package_end_date: {
                type: Sequelize.DATE
            },
            status: {
                type: Sequelize.ENUM(StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE),
                defaultValue: StatusConstant.STATUS_ACTIVE,
            },
            in_stock_label: {
                type: Sequelize.STRING(30)
            },
            description: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            external_link: {
                type: Sequelize.STRING(50)
            },
            external_link_btn: {
                type: Sequelize.STRING(20)
            },
            barcode: {
                type: Sequelize.STRING(30)
            },
            featured: {
                type: Sequelize.STRING(50)
            },
            // rating_id: {

            // },
            refundable: {
                type: Sequelize.BOOLEAN
            },
            // company_id: {

            // },
            discount_amount: {
                type: Sequelize.DECIMAL
            },
            discount_type: {
                type: Sequelize.STRING(20)
            },
            discount_percentage: {
                type: Sequelize.DECIMAL
            },
            // offers_id: {

            // },
            num_of_sale: {
                type: Sequelize.INTEGER
            },
            stock: {
                type: Sequelize.INTEGER
            },
            minimum_order_quantity: {
                type: Sequelize.INTEGER
            },
            maximum_order_quantity: {
                type: Sequelize.INTEGER
            },
            height: {
                type: Sequelize.INTEGER
            },
            width: {
                type: Sequelize.INTEGER
            },
            length: {
                type: Sequelize.INTEGER
            },
            max_weight: {
                type: Sequelize.STRING(50)
            },
            package_carrier_type: {
                type: Sequelize.STRING(50)
            },
            shipper_package_code: {
                type: Sequelize.STRING(50)
            },
            video_link: {
                type: Sequelize.STRING(100)
            },
            meta_title: {
                type: Sequelize.STRING(50)
            },
            meta_description: {
                type: Sequelize.STRING(150)
            },
            meta_image: {
                type: Sequelize.STRING(50)
            },
            // media_id: {

            // },
            slug: {
                type: Sequelize.STRING(50)
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
        await queryInterface.dropTable('product_packages');
    }
};