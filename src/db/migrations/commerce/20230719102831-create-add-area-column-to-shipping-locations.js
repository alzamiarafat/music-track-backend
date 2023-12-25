'use strict';
const { StatusConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'shipping_locations',
            'area',
            {
                type: Sequelize.ENUM(
                    StatusConstant.AREA_LOCATION_INSIDE,
                    StatusConstant.AREA_LOCATION_OUTSIDE
                ),
                defaultValue: StatusConstant.AREA_LOCATION_INSIDE
            }
        )
    }
};