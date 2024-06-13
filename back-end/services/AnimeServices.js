const Anime = require("../models/Anime");

async function addAnime(details) {
    let new_anime = new Anime({
        ID: details.ID,
        Name: details.Name,
        Author: details.Author,
        Director: details.Director,
        Studio: details.Studio,
        Producer: details.Producer,
        ReleaseDate: details.ReleaseDate,
        Genre: details.Genre,
        Format: details.Format,
        Episodes: details.Episodes,
        Ranking: details.Ranking,
        Season: details.Season,
        Story: details.Story,
        Poster: details.Poster,
        Wallpaper: details.Wallpaper
    });
    await new_anime.save();
    return new_anime;
}

async function showAllAnime() {
    let result = await Anime.find();
    return result ? result : null;
}

async function findAnimeByID(id) {
    let result = await Anime.findOne({ID: id});
    return result ? result : null;
}

async function updateAnime(id, new_content) {
    let result = await Anime.findOne({ID: id});
    if (new_content.Name) {
        result.Name = new_content.Name;
    }
    if (new_content.Author) {
        result.Author = new_content.Author;
    }
    if (new_content.Director) {
        result.Director = new_content.Director;
    }
    if (new_content.Studio) {
        result.Studio = new_content.Studio;
    }
    if (new_content.Producer) {
        result.Producer = new_content.Producer;
    }
    if (new_content.ReleaseDate) {
        result.ReleaseDate = new_content.ReleaseDate;
    }
    if (new_content.Genre) {
        result.Genre = new_content.Genre;
    }
    if (new_content.Format) {
        result.Format = new_content.Format;
    }
    if (new_content.Episodes) {
        result.Episodes = new_content.Episodes;
    }
    if (new_content.Ranking) {
        result.Ranking = new_content.Ranking;
    }
    if (new_content.Season) {
        result.Season = new_content.Season;
    }
    if (new_content.Story) {
        result.Story = new_content.Story;
    }
    if (new_content.Poster) {
        result.Poster = new_content.Poster;
    }
    if (new_content.Wallpaper) {
        result.Wallpaper = new_content.Wallpaper;
    }
    result.save();
    return result ? result : null;
}

async function deleteAnime(id) {
    let result = await Anime.findOneAndDelete({ID: id});
    return result ? result : null;
}

module.exports = {
    addAnime,
    showAllAnime,
    findAnimeByID,
    updateAnime,
    deleteAnime
}