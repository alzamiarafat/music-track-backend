'use strict';
const { InvoiceConstant } = require('../../../app/constant')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('invoices', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            invoice_type: {
                allowNull: false,
                type: Sequelize.ENUM(
                    InvoiceConstant.INVOICE_TYPE_POS,
                    InvoiceConstant.INVOICE_TYPE_ADMIN,
                    InvoiceConstant.INVOICE_TYPE_WEB,
                    //InvoiceConstant.INVOICE_TYPE_POS_RETURN,
                    //InvoiceConstant.INVOICE_TYPE_ADMIN_RETURN,
                    //InvoiceConstant.INVOICE_TYPE_WEB_RETURN,
                    InvoiceConstant.INVOICE_TYPE_PURCHASE,
                    InvoiceConstant.INVOICE_TYPE_GENERAL
                ),
                defaultValue:InvoiceConstant.INVOICE_TYPE_GENERAL,
                comment:'pos sale, admin sale, web sale, purchase, general'
            },
            invoice_type_id: {
                //allowNull: true, // general invoice can be created without any order
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            invoice_number: {
                type: Sequelize.STRING,
                allowNull:false
            },
            reference: {
                type: Sequelize.STRING,
                allowNull:true
            },
            invoice_date: {
                type: Sequelize.DATEONLY,
                allowNull:false
            },
            due_date: {
                type: Sequelize.DATEONLY,
                allowNull:true
            },
            total_amount:{
                type:Sequelize.FLOAT,
                allowNull:false,
                defaultValue: 0
            },
            vat:{
                type:Sequelize.FLOAT,
            },
            tax:{
                type:Sequelize.FLOAT,
            },
            discount:{
                type:Sequelize.FLOAT,
            },
            payable_amount:{
                type:Sequelize.FLOAT,
                allowNull:false,
                defaultValue: 0
            },
            partner_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
            partner_name: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            shipping_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
            shipping_address: {
                allowNull: true,
                type: Sequelize.TEXT,
            },
            city: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            country: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            zip: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            shipping_method_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            shipping_method: {
                type: Sequelize.STRING(80),
                allowNull: true,
            },
            shipping_location_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            shipping_location: {
                type: Sequelize.STRING(150),
                allowNull: true,
            },
            delivery_type_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            delivery_type: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            courier_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            courier: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            pickup_branch_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            pickup_branch: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            pickup_district_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            pickup_district: {
                type: Sequelize.STRING(50),
                allowNull: true,
            },
            shipping_cost: {
                type: Sequelize.DOUBLE,
                allowNull: false,
                defaultValue: 0
            },
            tracking_code: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            company_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                defaultValue:1
            },
            already_sent: {
                allowNull: true,
                type: Sequelize.INTEGER,
                defaultValue:0
            },
            is_reconciled: {
                allowNull: true,
                type: Sequelize.INTEGER,
                defaultValue:0
            },
            barcode: {
                type: Sequelize.TEXT,
                allowNull:true
            },
            payment_term_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
            status: {
                allowNull: false,
                type: Sequelize.ENUM(
                    InvoiceConstant.INVOICE_DRAFT,
                    InvoiceConstant.INVOICE_OPEN,
                    InvoiceConstant.INVOICE_PAID,
                    InvoiceConstant.INVOICE_CANCEL
                ),
                defaultValue:InvoiceConstant.INVOICE_DRAFT
            },
            print_count: {
                type: Sequelize.INTEGER,
                defaultValue:0
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
            },
            created_by: {
                allowNull: false,
                type: Sequelize.JSON
            },
            updated_by: {
                allowNull: false,
                type: Sequelize.JSON
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('invoices');
    }
};