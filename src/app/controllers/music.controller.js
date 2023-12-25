'use strict';
const ModelService = require("../services/common/model.service");
const MusicService = require("../services/model/music.service");

const MusicController = {
    index: async (req, res, next) => {
        try {
            const result = await MusicService.getAll(req);
            ModelService.successResponse(res, result);
        } catch (error) {
            next(error);
        }
    }
}

MusicController.name = 'MusicController';
module.exports = MusicController;