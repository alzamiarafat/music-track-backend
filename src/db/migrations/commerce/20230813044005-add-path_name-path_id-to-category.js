'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'categories',
                'path_name',
                {
                    type: Sequelize.STRING
                },
            ),
            await queryInterface.addColumn(
                'categories',
                'path_id',
                {
                    type: Sequelize.STRING
                },
            )
        ]
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
