exports.findMatches = function findMatches(wordToMatch, people) {
  const regex = new RegExp(wordToMatch, "gi");
  return people.filter((person) => person.name.match(regex));
};
