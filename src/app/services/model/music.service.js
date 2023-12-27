const MusicRepository = require("../../repositories/music.repository");

const MusicService = {
    getAll: async (req) => {
        return await MusicRepository.all(req);
    },

    getOne: async (req) => {
        const id = req.params.id;
        return await MusicRepository.one(id);
    },

    store: async (req) => {
        const { title, artist, url } = req.body;
        const data = { title, artist, url };

        return await MusicRepository.store(data);
    }
};

MusicService.name = 'MusicService';
module.exports = MusicService;
