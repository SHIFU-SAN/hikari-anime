const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const {
    addAnime,
    showAllAnime,
    findAnimeByID,
    updateAnime,
    deleteAnime
} = require("../services/AnimeServices");

async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Successfully connected to database.");
    } catch (err) {
        console.error(`Failed to connect to database! Because: ${err}`);
    }
}

connectToDB();

const app = express();

app.use(express.json());

async function createAnime(req, res) {
    try {
        let new_anime = await addAnime(req.body);
        return res.json(new_anime);
    } catch (err) {
        console.error(`Failed to create anime object! Because: ${err}`);
    }
}

async function readAnimeList(req, res) {
    try {
        let AnimeList = await showAllAnime();
        return res.json(AnimeList);
    } catch (err) {
        console.error(`Failed to read anime list! Because: ${err}`);
    }
}

async function readAnimeByID(req, res) {
    try {
        let anime = await findAnimeByID(req.params.id);
        return res.json(anime);
    } catch (err) {
        console.error(`Failed to read anime object! Because: ${err}`);
    }
}

async function setAnime(req, res) {
    try {
        let anime = await updateAnime(req.params.id, req.body);
        return res.json(anime);
    } catch (err) {
        console.error(`Failed to set anime object! Because: ${err}`);
    }
}

async function removeAnime(req, res) {
    try {
        let anime = await deleteAnime(req.params.id);
        return res.json(anime);
    } catch (err) {
        console.error(`Failed to remove anime object! Because: ${err}`);
    }
}

module.exports = {
    createAnime,
    readAnimeList,
    readAnimeByID,
    setAnime,
    removeAnime
}