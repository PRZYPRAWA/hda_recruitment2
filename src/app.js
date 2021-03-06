require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const functions = require("./functions");
const messages = require("./messages");

const ENDPOINT = "users";

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
app.use(express.static("./public"));

app.get(`/${ENDPOINT}/:name`, (req, res) => {
  const matched_people = functions.findMatches(req.params.name, db.people);
  console.log(matched_people);
  res.send(matched_people);
});

app.post(`/${ENDPOINT}`, (req, res) => {
  const [isValid, info] = functions.validate(req.body);
  console.log(isValid, info);
  if (isValid) {
    db.people.push(req.body);
    res.status(200).send(messages.ADDED_TO_DB);
  } else {
    res.status(400).send(info);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
