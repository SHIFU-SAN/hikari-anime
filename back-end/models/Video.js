const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    VideoID: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Source: {
        type: String,
        required: true
    },
    AnimeID: {
        type: String,
        required: true
    }
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;