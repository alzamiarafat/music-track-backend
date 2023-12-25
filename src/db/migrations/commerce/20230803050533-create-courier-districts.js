'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('courier_districts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            courier_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'couriers',
                    key: 'id'
                }
            },
            district_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'kx_districts',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            },
            
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('courier_districts');
    }
};