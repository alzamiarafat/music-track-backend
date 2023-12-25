'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //Remove existing column
        await queryInterface.removeColumn('inventories', 'created_by');
        await queryInterface.removeColumn('inventories', 'updated_by');

        //Then replace the column
        await queryInterface.addColumn('inventories', 'created_by', {
            type: Sequelize.STRING,
            allowNull: true
        });
        await queryInterface.addColumn('inventories', 'updated_by', {
            type: Sequelize.STRING,
            allowNull: true
        });
    }
};