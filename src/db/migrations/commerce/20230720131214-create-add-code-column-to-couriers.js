'use strict';
const { StatusConstant } = require('../../../app/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'couriers',
            'code',
            {
                type: Sequelize.ENUM(
                    StatusConstant.COURIER_CODE_KX_TRANSPORT,
                    StatusConstant.COURIER_CODE_PAPERFLY,
                    StatusConstant.COURIER_CODE_ECOURIER,
                    StatusConstant.COURIER_CODE_PATHAO,
                    StatusConstant.COURIER_CODE_SUNDARBAN,
                    StatusConstant.COURIER_CODE_C_EXPRESS,
                    StatusConstant.COURIER_CODE_SA_PARIBAHAN,
                    StatusConstant.COURIER_CODE_USB_EXPRESS,
                    StatusConstant.COURIER_CODE_ARAMEX,
                    StatusConstant.COURIER_CODE_INTERNAL
                ),
                defaultValue: StatusConstant.COURIER_CODE_KX_TRANSPORT
            }
        )
    }
};