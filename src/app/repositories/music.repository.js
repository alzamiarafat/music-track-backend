// const ModelService = require('../../services/common/model.service');
// const { Op } = require('sequelize');
// const db = require('../../models/commerce');
// const { ErrorConstant } = require('../../constant');

const Music = require("../models/Music");

const MusicRepository = {
    all: async (req) => {
        return await Music.find();
    },

    one: async (id) => {
        return await Music.findById(id);
    },

    store: async (body) => {
        const music = new Music({
            title: body.title,
            artist: body.artist,
            url: body.url,
        })
        return await music.save();
    }
};

MusicRepository.name = 'MusicRepository';
module.exports = MusicRepository;
