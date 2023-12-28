const Music = require("../models/Music");

const MusicRepository = {
    all: async (req) => {
        const queryOptions = {};
        if (req.query.keyword) {
            queryOptions.title = { '$regex': req.query.keyword, '$options': 'i' };
        }
        return await Music.find(queryOptions);
    },

    one: async (id) => {
        return await Music.findById(id);
    },

    store: async (body) => {
        const music = new Music({
            title: body.title,
            artist: body.artist,
            url: body.url,
            description: body.description
        })
        return await music.save();
    }
};

MusicRepository.name = 'MusicRepository';
module.exports = MusicRepository;
