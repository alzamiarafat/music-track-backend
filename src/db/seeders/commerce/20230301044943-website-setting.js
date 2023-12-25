'use strict';

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

        await queryInterface.bulkInsert('website_settings', [
            {
                title: 'version',
                value: '1.0.0',
                content_type: 'text'
            },
            {
                title: 'title',
                value: 'ILLIYEEN',
                content_type: 'text'
            },
            {
                title: 'slogan',
                value: 'The High-End Retailer',
                content_type: 'text',
            },
            {
                title: 'logo',
                value: 'https://d19qnzrkx7fd3b.cloudfront.net/static/images/ILLIYEEN-Logo2.png',
                content_type: 'url',
            },
            {
                title: 'logo_mobile',
                value: 'https://d19qnzrkx7fd3b.cloudfront.net/static/images/ILLIYEEN-Logo3.png',
                content_type: 'url',
            },
            {
                title: 'placeholder_image',
                value: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
                content_type: 'url',
            },
            {
                title: 'default_currency',
                value: 'BDT',
                content_type: 'text',
            },
            {
                title: 'home_page_banner_image',
                value: 'https://d19qnzrkx7fd3b.cloudfront.net/media/images/3.1-_Generic.original.format-jpeg.jpg',
                content_type: 'url',
            },
            {
                title: 'contact_number',
                value: '09666774577',
                content_type: 'number',
            },
            {
                title: 'contact_email',
                value: 'support@ilyn.global',
                content_type: 'email',
            },
            {
                title: 'facebook_url',
                value: 'https://www.facebook.com/ILYNLifeStyle/',
                content_type: 'url',
            },
            {
                title: 'youtube_url',
                value: 'https://youtube.com',
                content_type: 'url',
            },
            {
                title: 'twitter_url',
                value: 'https://twitter.com',
                content_type: 'url',
            },
            {
                title: 'instagram_url',
                value: 'https://www.instagram.com/ilynlifestyle/',
                content_type: 'url',
            },
            {
                title: 'copyright_text',
                value: 'All rights reserved.',
                content_type: 'text',
            },
            {
                title: 'footer_one_background_image',
                value: 'https://d19qnzrkx7fd3b.cloudfront.net/static/images/cover_images/footer-bg-one.png',
                content_type: 'url',
            },
            {
                title: 'easy_return_text',
                value: 'You may apply for an Exchange or Return for a product or service within 7 days after you’ve received it.',
                content_type: 'text',
            },
            {
                title: 'promotion_text',
                value: 'Contactless Delivery: Save 5% On Entire Order With Digital Payment',
                content_type: 'text',
            }
        ], {});
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
