import supertest from "supertest";
import app from "../../src/web/index";
import { clearHellos } from "../utils";

const request = supertest(app);

beforeEach(clearHellos);

it("returns with success on get given no hellos exist", async done => {
  const response = await request.get("/api/v1/hellos");

  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual([]);

  done();
});

it("returns with success on get given hellos exist", async done => {
  const postResponse = await request
    .post("/api/v1/hellos")
    .send({ message: "hello message" });

  expect(postResponse.status).toBe(201);

  const response = await request.get("/api/v1/hellos");

  expect(response.status).toBe(200);
  expect(response.body[0].message).toStrictEqual("hello message");
  expect(response.body[0].author).toStrictEqual(null);

  done();
});
