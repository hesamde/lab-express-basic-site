const express = require("express");
const app = express();
const port = 3000;

app.use("/static", express.static(path.join(__dirname, "public")));

// our first Route
app.get("/home", (request, response, next) => {
  console.log(request);
  response.send("<h1>Welcome Ironhacker. :)</h1>");
});

app.get("/about", (request, response, next) => {
  console.log(request);
  response.send("<h1>About Ironhacker.</h1>");
});

app.get("/Work", (request, response, next) => {
  console.log(request);
  response.send("<h1>About Ironhacker.</h1>");
});

app.get("/Photo-Gallery", (request, response, next) => {
  console.log(request);
  response.send("<h1>About Ironhacker.</h1>");
});

app.listen(3000);
