const functions = require("./functions");
const messages = require("./messages");

describe("validate function should", () => {
  test("return truthy when proper person", () => {
    const person = { name: "Name", age: 12 };
    const [isValid, info] = functions.validate(person);
    expect(isValid).toBeTruthy();
  });

  test("return falsy when person without age", () => {
    const person = { name: "Name" };
    const [isValid, info] = functions.validate(person);
    expect(isValid).toBeFalsy();
    expect(info).toBe(messages.NAME_OR_AGE_NOT_DEFINED);
  });

  test("return false when person without name", () => {
    const person = { age: 12 };
    const [isValid, info] = functions.validate(person);
    expect(isValid).toBeFalsy();
    expect(info).toBe(messages.NAME_OR_AGE_NOT_DEFINED);
  });

  test("return false when person with name and age equals 0", () => {
    const person = { name: "Name", age: 0 };
    const [isValid, info] = functions.validate(person);
    expect(isValid).toBeFalsy();
    expect(info).toEqual(messages.AGE_LESS_EQUAL_ZERO);
  });

  test("return false when person with name and age less than 0", () => {
    const person = { name: "Name", age: -1 };
    const [isValid, info] = functions.validate(person);
    expect(isValid).toBeFalsy();
    expect(info).toBe(messages.AGE_LESS_EQUAL_ZERO);
  });
});

describe("findMatches function should", () => {
  test("return all words that matches", () => {
    const toFind = "a";
    const toSearch = [{ name: "a" }, { name: "ba" }, { name: "c" }];
    const received = functions.findMatches(toFind, toSearch);
    const expected = [{ name: "a" }, { name: "ba" }];
    expect(received).toStrictEqual(expected);
  });

  test("return empty array if nothing matches", () => {
    const toFind = "a";
    const toSearch = [{ name: "b" }, { name: "c" }];
    const received = functions.findMatches(toFind, toSearch);
    const expected = [];
    expect(received).toStrictEqual(expected);
  });

  test("return empty array if toSearch array is empty", () => {
    const toFind = "a";
    const toSearch = [];
    const received = functions.findMatches(toFind, toSearch);
    const expected = [];
    expect(received).toStrictEqual(expected);
  });

  test("return empty array if toFind word is empty", () => {
    const toFind = "";
    const toSearch = [{ name: "b" }, { name: "c" }];
    const received = functions.findMatches(toFind, toSearch);
    const expected = [];
    expect(received).toStrictEqual(expected);
  });
});
