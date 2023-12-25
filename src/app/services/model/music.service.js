const MusicRepository = require("../../repositories/music.repository");

const MusicService = {
    getAll: async (req) => {
        return await MusicRepository.all(req);
    }
};

MusicService.name = 'MusicService';
module.exports = MusicService;
