'use strict';
const { OrderConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'orders',
            'delivery_partner_status',
            {
                type:Sequelize.ENUM(
                    OrderConstant.DELIVERY_STATUS_PENDING,
                    OrderConstant.DELIVERY_STATUS_WAITING_FOR_PICKUP,
                    OrderConstant.DELIVERY_STATUS_REQUEST_FOR_PICKUP,
                    OrderConstant.DELIVERY_STATUS_PICKED_UP,
                    OrderConstant.DELIVERY_STATUS_WAY_TO_HUB,
                    OrderConstant.DELIVERY_STATUS_RECEIVED_IN_HUB_CANCEL,
                    OrderConstant.DELIVERY_STATUS_RECEIVED_IN_HUB,
                    OrderConstant.DELIVERY_STATUS_RETURN_TO_MERCHANT,
                    OrderConstant.DELIVERY_STATUS_WAITING_FOR_DELIVERY,
                    OrderConstant.DELIVERY_STATUS_REQUEST_FOR_DELIVERY,
                    OrderConstant.DELIVERY_STATUS_WAY_TO_DELIVERY,
                    OrderConstant.DELIVERY_STATUS_DELIVERED,
                    OrderConstant.DELIVERY_STATUS_HOLD,
                    OrderConstant.DELIVERY_STATUS_CANCEL
                ),
                allowNull:true,
                defaultValue: null
            },
        )
    },

    async down(queryInterface, Sequelize) {
        //
    }
};
