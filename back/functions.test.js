const functions = require("./functions");
const messages = require("./messages");

test("validate proper person", () => {
  const person = { name: "Name", age: 12 };
  const [isValid, info] = functions.validate(person);
  expect(isValid).toBeTruthy();
});

test("validate person without age", () => {
  const person = { name: "Name" };
  const [isValid, info] = functions.validate(person);
  expect(isValid).toBeFalsy();
  expect(info).toBe(messages.NAME_OR_AGE_NOT_DEFINED);
});

test("validate person without name", () => {
  const person = { age: 12 };
  const [isValid, info] = functions.validate(person);
  expect(isValid).toBeFalsy();
  expect(info).toBe(messages.NAME_OR_AGE_NOT_DEFINED);
});

test("validate person with name and age equals 0", () => {
  const person = { name: "Name", age: 0 };
  const [isValid, info] = functions.validate(person);
  expect(isValid).toBeFalsy();
  expect(info).toEqual(messages.AGE_LESS_EQUAL_ZERO);
});

test("validate person with name and age less than 0", () => {
  const person = { name: "Name", age: -1 };
  const [isValid, info] = functions.validate(person);
  expect(isValid).toBeFalsy();
  expect(info).toBe(messages.AGE_LESS_EQUAL_ZERO);
});

test("findMatches returns all words that matches", () => {
  const toFind = "a";
  const toSearch = ["a", "ba", "c"];
  const received = functions.findMatches(toFind, toSearch);
  const expected = ["a", "ba"];
});
