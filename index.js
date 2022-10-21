const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");
// console.log(news);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const selectedCategoryNews = news.filter((n) => n.category_id === id);
    res.send(selectedCategoryNews);
  }
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.filter((n) => n._id === id);
  console.log(selectedNews);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`App is listening in port ${port}`);
});
