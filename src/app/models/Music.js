const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    artist: {
        type: String,
    },
    url: {
        type: String,
    },
    description: {
        type: String
    },
    status: {
        type: String,
        default: "ACTIVE"
    }
}, {
    timestamps: true,
})
const Music = mongoose.model('Music', MusicSchema);
module.exports = Music;