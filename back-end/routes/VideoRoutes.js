const express = require('express');
const router = express.Router();

const {
    createVideo,
    readVideosList,
    readVideosByAnime,
    readVideoByID,
    setVideo,
    removeVideo,
    removeVideosByAnime
} = require("../controllers/VideoController");

const app = express();

app.use(express.json());

router.post('/add', createVideo);
router.get('/', readVideosList);
router.get('/anime/:id', readVideosByAnime);
router.get("/:id", readVideoByID);
router.put("/:id", setVideo);
router.delete("/delete/:id", removeVideo);
router.delete("/delete/anime/:id", removeVideosByAnime)

module.exports = router;