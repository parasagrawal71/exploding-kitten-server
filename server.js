const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./src/api/api.router");
require("./src/utils/db.connect");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Exploding kitten API Server!");
});

app.listen(PORT, () => {
  console.log(`Exploding kitten API Server is running on ${PORT}`);
});
