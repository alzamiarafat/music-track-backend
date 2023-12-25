// const ModelService = require('../../services/common/model.service');
// const { Op } = require('sequelize');
// const db = require('../../models/commerce');
// const { ErrorConstant } = require('../../constant');

const MusicRepository = {
    all: async (req) => {
        // let include = [];
        // let where = {};

        // const { q, value, status } = req.query;

        // if (value) where.value = { [Op.iLike]: `%${value}%` }
        // if (status) where.status = status;

        // let queryOptions = await ModelService.getQueryOptions(db.AdminSettings, req);

        // if (q) {
        //     where = {
        //         ...where,
        //         [Op.or]: [
        //             { title: { [Op.iLike]: `%${q}%` } },
        //         ]
        //     };
        // }

        // queryOptions.include = include;
        // queryOptions.where = where;

        // let setting = await db.AdminSettings.findAndCountAll(queryOptions);
        // if (!setting) throw new Error(ErrorConstant.SETTING_NOT_FOUND);

        // return setting;
    }

};

MusicRepository.name = 'MusicRepository';
module.exports = MusicRepository;
