'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //Remove existing column
        await queryInterface.removeColumn('warehouses', 'business_hour_start');
        await queryInterface.removeColumn('warehouses', 'business_hour_end');

        //Then replace the column
        await queryInterface.addColumn('warehouses', 'business_hour_start', {
            type: 'time with time zone',
            allowNull: true,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        });
        await queryInterface.addColumn('warehouses', 'business_hour_end', {
            type: 'time with time zone',
            allowNull: true,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        })
    }
};