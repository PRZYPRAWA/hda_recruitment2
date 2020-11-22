exports.findMatches = function findMatches(wordToMatch, people) {
  const regex = new RegExp(wordToMatch, "gi");
  return people.filter((person) => person.name.match(regex));
};

const response = { info: "" };
const NAME_OR_AGE_NOT_DEFINED = "Name or age not defined";
const AGE_LESS_EQUAL_ZERO = "Age must be positive";

exports.validate = function validate(person) {
  if (!(person.name && person.age)) {
    response.info = NAME_OR_AGE_NOT_DEFINED;
    return [false, response];
  } else if (person.age <= 0) {
    response.info = AGE_LESS_EQUAL_ZERO;
    return [false, response];
  } else {
    return [true, ""];
  }
};
