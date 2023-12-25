'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('kx_stores', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            contact_email: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            contact_phone: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            store_address: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            pickup_address: {
                type: Sequelize.STRING(100),
                allowNull: false
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
        await queryInterface.dropTable('kx_stores');
    }
};