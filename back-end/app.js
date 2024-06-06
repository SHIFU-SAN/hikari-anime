const express = require('express');
const cors = require('cors');
require('dotenv').config();

const anime_routes = require("./routes/AnimeRoutes");
const video_routes = require("./routes/VideoRoutes");
const HOST = process.env.HOST || "127.0.1.1";
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/anime', anime_routes);
app.use('/video', video_routes);

app.listen(PORT, HOST, () => console.log(`Server is running on port ${PORT}.`));