const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    ID: {
        type: String,
        required: true
    },
    Name: String,
    Author: String,
    Director: String,
    Studio: [String],
    Producer: [String],
    ReleaseDate: String,
    Genre: [String],
    Format: String,
    Episodes: Number,
    Ranking: Number,
    Season: String,
    Story: String,
    Poster: String,
    Wallpaper: String
});

const Anime = mongoose.model('Anime', AnimeSchema);

module.exports = Anime;