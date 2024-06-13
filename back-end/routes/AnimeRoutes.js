const express = require('express');
const router = express.Router();

const {
    createAnime,
    readAnimeList,
    readAnimeByID,
    readAnimeByGenre,
    setAnime,
    removeAnime, readAnimeByName
} = require("../controllers/AnimeController");

const app = express();

app.use(express.json());

router.post('/add', createAnime);
router.get('/', readAnimeList);
router.get('/:id', readAnimeByID);
router.put('/:id', setAnime);
router.delete('/delete/:id', removeAnime);
module.exports = router;