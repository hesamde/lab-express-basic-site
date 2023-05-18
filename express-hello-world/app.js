const express = require("express");

// We create our own server named app
// Express server will be handling requests and responses
const express = require("express");
const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

// our first Route
app.get("/home", (request, response, next) => {
  console.log(request);
  response.send("<h1>Welcome Ironhacker. :)</h1>");
});

app.listen(3000);
