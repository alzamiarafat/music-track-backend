'use strict';
const { SizeGuideConstant } = require('../../../app/constant')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'categories',
            'size_guide',
            {
                allowNull:true,
                type:Sequelize.ENUM(
                    SizeGuideConstant.MENS_THOBE,
                    SizeGuideConstant.MENS_KABLI,
                    SizeGuideConstant.MENS_PANJABI,
                    SizeGuideConstant.KIDS_PANJABI,
                    SizeGuideConstant.MENS_SHIRT,
                    SizeGuideConstant.T_SHIRT_AND_POLOS,
                    SizeGuideConstant.MENS_TROUSERS,
                    SizeGuideConstant.MENS_CHINOS,
                    SizeGuideConstant.MENS_JEANS,
                    SizeGuideConstant.JOGGERS_AND_L_CHINO,
                    SizeGuideConstant.MENS_JACKETS_AND_OUTERWEAR,
                    SizeGuideConstant.MENS_WAISTCOAT,
                    SizeGuideConstant.MENS_BOXER,
                    SizeGuideConstant.SANDALS,
                    SizeGuideConstant.SHOES,
                    SizeGuideConstant.SNEAKERS,
                    SizeGuideConstant.RING  
                ),
            },
        )
    }
};
