exports.findMatches = function findMatches(wordToMatch, people) {
  if (wordToMatch) {
    const regex = new RegExp(wordToMatch, "gi");
    return people.filter((person) => person.name.match(regex));
  } else {
    return [];
  }
};

const messages = require("./messages");

exports.validate = function validate(person) {
  if (!(person.name && (person.age || person.age === 0))) {
    return [false, messages.NAME_OR_AGE_NOT_DEFINED];
  } else if (person.age <= 0) {
    return [false, messages.AGE_LESS_EQUAL_ZERO];
  } else {
    return [true, ""];
  }
};
