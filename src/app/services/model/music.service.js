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
        const { title, artist, url, description } = req.body;
        const data = { title, artist, url, description };

        return await MusicRepository.store(data);
    }
};

MusicService.name = 'MusicService';
module.exports = MusicService;
