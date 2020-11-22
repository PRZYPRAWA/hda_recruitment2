const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;

app.use(bodyParser.json());

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
