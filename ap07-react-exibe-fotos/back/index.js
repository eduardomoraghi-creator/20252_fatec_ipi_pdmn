require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
app.use(cors());
//GET /search gato
//pacote digite 'npm i express' -> permite a criação dos endpoints
app.get("/search", async (req, res) => {
  const pexelsClient = axios.create({
    baseURL: "https://api.pexels.com/v1/",
    headers: {
      Authorization: process.env.PEXELS_KEY,
    },
  });
  const result = await pexelsClient.get("/search", {
    params: {
      query: req.query.query,
    },
  });
  // console.log(result.data);
  res.json({ photos: result.data.photos });
});

const port = 3000;
app.listen(port, () => console.log(`Back. Porta ${port}.`));
