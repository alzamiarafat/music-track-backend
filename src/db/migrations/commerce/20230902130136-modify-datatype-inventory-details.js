'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //Remove existing column
        await queryInterface.removeColumn('inventory_details', 'created_by');
        await queryInterface.removeColumn('inventory_details', 'updated_by');

        //Then replace the column
        await queryInterface.addColumn('inventory_details', 'created_by', {
            type: Sequelize.STRING,
            allowNull: true
        });
        await queryInterface.addColumn('inventory_details', 'updated_by', {
            type: Sequelize.STRING,
            allowNull: true
        });
    }
};