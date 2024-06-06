const express = require('express');
const router = express.Router();

const {
    createAnime,
    readAnimeList,
    readAnimeByID,
    readAnimeByGenre,
    setAnime,
    removeAnime
} = require("../controllers/AnimeController");

const app = express();

app.use(express.json());

router.post('/add', createAnime);
router.get('/', readAnimeList);
router.get('/:id', readAnimeByID);
router.get('/:genre', readAnimeByGenre);
router.put('/:id', setAnime);
router.delete('/delete/:id', removeAnime);

module.exports = router;