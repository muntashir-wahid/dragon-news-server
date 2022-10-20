const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
// console.log(categories);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`App is listening in port ${port}`);
});
