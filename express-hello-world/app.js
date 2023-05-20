const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use("/", express.static(path.join(__dirname, "public")));

// our first Route
app.get("/home", (req, res) => {
  res.send("<h1> Home PAge</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me Page .</h1>");
});

app.get("/Work", (req, res) => {
  res.send("<h1>My Work  Page.</h1>");
});

app.get("/photo-gallery", (req, res) => {
  res.send("<h1>Photo Page.</h1>");
});

app.listen(port, () => {
  console.log(`Essencial ${port}`);
});
