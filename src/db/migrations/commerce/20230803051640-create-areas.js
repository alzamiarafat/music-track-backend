'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('areas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            division_name: {
                type: Sequelize.STRING
            },
            delivery_address: {
                type: Sequelize.STRING
            },
            contact_name: {
                type: Sequelize.STRING
            },
            office_contact_no: {
                type: Sequelize.STRING
            },
            manager_contact_no: {
                type: Sequelize.STRING
            },
            courier_id: {
                type: Sequelize.INTEGER
            },
            district_id: {
                type: Sequelize.INTEGER
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
                type: Sequelize.DATE
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('areas');
    }
};