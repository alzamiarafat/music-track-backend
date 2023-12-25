'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return [
            await queryInterface.addColumn(
                'invoices',
                'dp_tnx_id',
                {
                    type:Sequelize.STRING,
                    allowNull:true,
                    defaultValue: null
                },
            ),
        ]
        
    },

    async down(queryInterface, Sequelize) {
        //
    }
};
