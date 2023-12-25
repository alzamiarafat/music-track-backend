'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'product_attachment_details_attachments',
            'sequence',
            {
                allowNull: true,
                type: Sequelize.INTEGER,
                defaultValue: 1,
            },
        )
    }
};
