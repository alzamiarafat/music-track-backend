const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: [true, "Please provide a valid group name!"],
    },
    groupMembers: {
        type: Array,
        default: []
    },
    groupDescription: String,
    groupType: String,
    groupStatus: {
        type: String,
        default: "ENABLE"
    },
    // groupImg:String,
    groupImg: {
        type: String,
        default: 'assets/upload/default.png'
    },
    usersId: String,
}, {
    timestamps: true,
})
const Music = mongoose.model('Music', MusicSchema);
module.exports = Music;