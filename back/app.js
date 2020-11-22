const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const utils = require("./functions.js");

const port = 8000;

const db = {
  people: [
    { name: "John", age: 27 },
    { name: "Jack", age: 19 },
    { name: "Mack", age: 51 },
    { name: "Sasin", age: 70 },
    { name: "Richard", age: 34 },
    { name: "Andrew", age: 42 },
  ],
};

app.use(bodyParser.json());

app.get("/:name", (req, res) => {
  const matched_people = utils.findMatches(req.params.name, db.people);
  res.send(matched_people);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
