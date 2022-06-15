const express = require("express");
const cors = require("cors");
const en = require('./en.json')
const pl = require('./pl.json')
const app = express();

app.use(express.static("public"));
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.get('/pl', (req, res) => {
    res.json(pl)
})

app.get('/en', (req, res) => {
  res.json(en)
})

const PORT = process.env.PORT || 3001;

async function start() {
  app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
}
start();