exports.findMatches = function findMatches(wordToMatch, people) {
  const regex = new RegExp(wordToMatch, "gi");
  return people.filter((person) => person.name.match(regex));
};

const messages = require("./messages");

exports.validate = function validate(person) {
  if (!(person.name && person.age)) {
    return [false, messages.NAME_OR_AGE_NOT_DEFINED];
  } else if (person.age <= 0) {
    return [false, messages.AGE_LESS_EQUAL_ZERO];
  } else {
    return [true, ""];
  }
};
