const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const {
    addVideo,
    showAllVideos,
    findVideosByAnime,
    findVideoByID,
    updateVideo,
    deleteVideo,
    deleteVideosByAnime
} = require("../services/VideoServices");
const res = require("express/lib/response");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Successfully connected to database.");
    } catch (err) {
        console.error(`Failed to connect to DB! Because: ${err}`);
    }
}

connectToDB();

const app = express();

app.use(express.json());

async function createVideo(req, res) {
    try {
        let new_video = await addVideo(req.body);
        return res.json(new_video);
    } catch (err) {
        console.error(`Failed to create video! Because: ${err}`);
    }
}

async function readVideosList(req, res) {
    try {
        let videos_list = await showAllVideos();
        return res.json(videos_list);
    } catch (err) {
        console.error(`Failed to read videos list! Because: ${err}`);
    }
}

async function readVideosByAnime(req, res) {
    try {
        let videos_list = await findVideosByAnime(req.params.id);
        return res.json(videos_list);
    } catch (err) {
        console.error(`Failed to read videos byAnime!Because: ${err}`);
    }
}

async function readVideoByID(req, res) {
    try {
        let video = await findVideoByID(req.body.id);
        return res.json(video);
    } catch (err) {
        console.error(`Failed to read video by ID! Because: ${err}`);
    }
}

async function setVideo(req, res) {
    try {
        let video = await updateVideo(req.params.id, req.body);
        return res.json(video);
    } catch (err) {
        console.error(`Failed to set video! Because: ${err}`);
    }
}

async function removeVideo(req, res) {
    try {
        let video = await deleteVideo(req.params.id);
        return res.json(video);
    } catch (err) {
        console.error(`Failed to remove video! Because: ${err}`);
    }
}

async function removeVideosByAnime(req, res) {
    try {
        let video = await deleteVideosByAnime(req.params.id);
        return res.json(video);
    } catch (err) {
        console.error(`Failed to remove these videos! Because: ${err}`);
    }
}


module.exports = {
    createVideo,
    readVideosList,
    readVideosByAnime,
    readVideoByID,
    setVideo,
    removeVideo,
    removeVideosByAnime
}
