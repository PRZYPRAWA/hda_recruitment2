const request = require("supertest");
const app = require("./app");
const messages = require("./messages");

describe("Get endpoint", () => {
  it("should get one person", async () => {
    const endpoint = "/users/Jack";
    const res = await request(app).get(endpoint);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ name: "Jack", age: 19 }]);
  });

  it("should get two people", async () => {
    const endpoint = "/users/ack";
    const res = await request(app).get(endpoint);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { name: "Jack", age: 19 },
      { name: "Mack", age: 51 },
    ]);
  });

  it("should get no person", async () => {
    const endpoint = "/users/NoName";
    const res = await request(app).get(endpoint);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});

describe("Post endpoint", () => {
  it("should add one person to database", async () => {
    const endpoint = "/users";
    const person = { name: "Rick", age: 12 };
    const res = await request(app).post(endpoint).send(person);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(messages.ADDED_TO_DB);
  });

  it("should not add a person without age", async () => {
    const endpoint = "/users";
    const person = { name: "Rick" };
    const res = await request(app).post(endpoint).send(person);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual(messages.NAME_OR_AGE_NOT_DEFINED);
  });

  it("should not add a person with age equal 0", async () => {
    const endpoint = "/users";
    const person = { name: "Rick", age: 0 };
    const res = await request(app).post(endpoint).send(person);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual(messages.AGE_LESS_EQUAL_ZERO);
  });

  it("should not add a person without name", async () => {
    const endpoint = "/users";
    const person = { name: "", age: 12 };
    const res = await request(app).post(endpoint).send(person);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual(messages.NAME_OR_AGE_NOT_DEFINED);
  });

  it("should not add a person without name and age", async () => {
    const endpoint = "/users";
    const person = { name: "" };
    const res = await request(app).post(endpoint).send(person);
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual(messages.NAME_OR_AGE_NOT_DEFINED);
  });
});
