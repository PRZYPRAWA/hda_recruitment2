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

const ADDED_TO_DB = { info: "Added to database." };

app.use(bodyParser.json());

app.get("/:name", (req, res) => {
  const matched_people = utils.findMatches(req.params.name, db.people);
  res.send(matched_people);
});

app.post("/", (req, res) => {
  const [isValid, info] = utils.validate(req.body);
  console.log(isValid, info);
  if (isValid) {
    db.people.push(req.body);
    res.status(200).send(ADDED_TO_DB);
  } else {
    res.status(400).send(info);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
