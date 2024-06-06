const Video = require("../models/Video");

async function addVideo(details) {
    let new_video = new Video({
        VideoID: details.VideoID,
        Name: details.Name,
        Source: details.Source,
        AnimeID: details.AnimeID
    });
    new_video.save();
    return new_video;
}

async function showAllVideos() {
    let result = await Video.find();
    return result ? result : null;
}

async function findVideosByAnime(anime_id) {
    let result = await Video.find({AnimeID: anime_id});
    return result ? result : null;
}

async function findVideoByID(video_id) {
    let result = await Video.findOne({VideoID: video_id});
    return result ? result : null;
}

async function updateVideo(video_id, new_content) {
    let result = await Video.findOne({VideoID: video_id});
    if (new_content.Name) {
        result.Name = new_content.Name;
    }
    if (new_content.Source) {
        result.Source = new_content.Source;
    }
    if (new_content.AnimeID) {
        result.AnimeID = new_content.AnimeID;
    }
    result.save();
    return result ? result : null;
}

async function deleteVideo(video_id) {
    let result = await Video.findOneAndDelete({VideoID: video_id});
    return result ? result : null;
}

module.exports = {
    addVideo,
    showAllVideos,
    findVideosByAnime,
    findVideoByID,
    updateVideo,
    deleteVideo
}