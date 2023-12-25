'use strict';
const { StatusConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'delivery_types',
            'type',
            {
                type: Sequelize.ENUM(
                    StatusConstant.DELIVERY_TYPE_STANDARD,
                    StatusConstant.DELIVERY_TYPE_URGENT
                ),
                defaultValue: StatusConstant.DELIVERY_TYPE_STANDARD
            }
        )
    }
};