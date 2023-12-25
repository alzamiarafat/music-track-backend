'use strict';
/** @type {import('sequelize-cli').Migration} */
const { StatusConstant } = require('../../../app/constant')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('vendors', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            street: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            display_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            zip: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            ref: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            website: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            street2: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            barcode: {
                type: Sequelize.STRING,
                allowNull: true,
            },

            status: {
                type: Sequelize.ENUM,
                values: [StatusConstant.STATUS_ACTIVE, StatusConstant.STATUS_INACTIVE],
                defaultValue: StatusConstant.STATUS_ACTIVE
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            type: {
                type: Sequelize.ENUM,
                allowNull: false,
                values: ['contact', 'invoice', 'delivery', 'other'],
            },
            birthdate: {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
            vat: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            gender: {
                type: Sequelize.ENUM,
                values: ['male', 'female'],
                allowNull: true,
            },
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1,
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
        await queryInterface.dropTable('vendors');
    }
};