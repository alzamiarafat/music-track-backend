'use strict';
require('dotenv').config('../../.env');
const env = process.env.NODE_ENV

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        if (env === 'development') {
            await queryInterface.bulkInsert('orders', [
                {
                    order_number: '123456',
                    note: 'Hello Order',
                    customer_id: 1,
                    customer_email: 'enayet.hossain@byslglobal.com',
                    customer_phone: '01878042517',
                    recipient_name: 'Md. Enayet',
                    recipient_phone: '01878042517',
                    shipping_address_id: 1,
                    shipping_address: 'gulshan-2, Dhaka',
                    shipping_location: 'Kalachandpur',
                    city: 'Dhaka',
                    country: 'Bangladesh',
                    zip: '1234',
                    shipping_method_id: 1,
                    shipping_method: 'COD',
                    pickup_branch_id: 1,
                    pickup_branch: 'Gushan',
                    pickup_district_id: 1,
                    pickup_district: 'Dhaka',
                    shipping_cost: 50,
                    payment_method_id: 1,
                    payment_method: 'cash',
                    payment_discount: 1,
                    payment_discount_amount: 20,
                    payment_status: 'unpaid',
                    payment_details: '',
                    reward_point: 5,
                    reward_redeem: 2,
                    currency_id: 1,
                    currency_rate: 1,
                    tax: 3,
                    vat: 2,
                    grand_total: 2000,
                    coupon_discount: 0,
                    //coupon_code:123,
                    //tracking_code:123,
                    cancel_request: false,
                    cancel_request_at: new Date(),
                    delivery_date: new Date(),
                    delivery_status: 'pending',
                    status: 'processing',
                    created_at: new Date(),
                    updated_at: new Date()
                }, {
                    order_number: '1234',
                    note: 'Hello Order 2',
                    user_id: 1,
                    user_email: 'enayet.hossain+1@byslglobal.com',
                    user_phone: '01878042516',
                    recipient_name: 'Md. Enayet 1',
                    recipient_phone: '01878042516',
                    shipping_address_id: 1,
                    shipping_address: 'gulshan-2, Dhaka',
                    shipping_location: 'Kalachandpur',
                    city: 'Dhaka',
                    country: 'Bangladesh',
                    zip: '1234',
                    shipping_method_id: 1,
                    shipping_method: 'COD',
                    pickup_branch_id: 1,
                    pickup_branch: 'Gushan',
                    pickup_district_id: 1,
                    pickup_district: 'Dhaka',
                    shipping_cost: 50,
                    payment_method_id: 1,
                    payment_method: 'cash',
                    payment_discount: 1,
                    payment_discount_amount: 20,
                    payment_status: 'unpaid',
                    payment_details: '',
                    reward_point: 5,
                    reward_redeem: 2,
                    currency_id: 1,
                    currency_rate: 1,
                    tax: 3,
                    vat: 2,
                    grand_total: 2000,
                    coupon_discount: 0,
                    //coupon_code:123,
                    //tracking_code:123,
                    cancel_request: false,
                    cancel_request_at: new Date(),
                    delivery_date: new Date(),
                    delivery_status: 'pending',
                    status: 'processing',
                    created_at: new Date(),
                    updated_at: new Date()
                }, {
                    order_number: '1234987',
                    note: 'Hello Order 3',
                    user_id: 1,
                    user_email: 'enayet.hossain+2@byslglobal.com',
                    user_phone: '01878042513',
                    recipient_name: 'Md. Enayet 3',
                    recipient_phone: '01878042513',
                    shipping_address_id: 1,
                    shipping_address: 'gulshan-1, Dhaka',
                    shipping_location: 'Kalachandpur 2',
                    city: 'Dhaka',
                    country: 'Bangladesh',
                    zip: '1234',
                    shipping_method_id: 1,
                    shipping_method: 'COD',
                    pickup_branch_id: 1,
                    pickup_branch: 'Gushan',
                    pickup_district_id: 1,
                    pickup_district: 'Dhaka',
                    shipping_cost: 50,
                    payment_method_id: 1,
                    payment_method: 'cash',
                    payment_discount: 1,
                    payment_discount_amount: 20,
                    payment_status: 'unpaid',
                    payment_details: '',
                    reward_point: 5,
                    reward_redeem: 2,
                    currency_id: 1,
                    currency_rate: 1,
                    tax: 3,
                    vat: 2,
                    grand_total: 2000,
                    coupon_discount: 0,
                    //coupon_code:123,
                    //tracking_code:123,
                    cancel_request: false,
                    cancel_request_at: new Date(),
                    delivery_date: new Date(),
                    delivery_status: 'pending',
                    status: 'processing',
                    created_at: new Date(),
                    updated_at: new Date()
                },
            ], {});
        }
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

    }
};
