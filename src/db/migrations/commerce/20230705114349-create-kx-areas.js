'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('kx_areas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            district_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'kx_districts',
                    key: 'id'
                }
            },
            upazila_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'kx_upazilas',
                    key: 'id'
                }
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            name_bn: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            district_name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            district_name_bn: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            upazila_name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            upazila_name_bn: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            created_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('now'),
                type: Sequelize.DATE
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('kx_areas');
    }
};