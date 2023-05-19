const express = require("express");
const app = express();
const port = 3000;

app.use("/static", express.static(path.join(__dirname, "public")));

// our first Route
app.get("/home", (request, response) => {
  res.send("<h1> Home PAge</h1>");
});

app.get("/about", (request, response) => {
  res.send("<h1>About Me Page .</h1>");
});

app.get("/Work", (request, response) => {
  res.send("<h1>My Work  Page.</h1>");
});

app.get("/Photo-Gallery", (req, res) => {
  res.send("<h1>Photo Page.</h1>");
});

app.listen(3000);
