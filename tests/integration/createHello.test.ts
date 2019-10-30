import supertest from "supertest"
import app from "../../src/web/index"
import { Hello } from "../../src/app/entities/hello"
import { clearHellos } from "../utils"

const request = supertest(app)

beforeEach(clearHellos)

test("Create hello fails with no message key", async () => {
  request
    .post("/api/v1/hellos")
    .send({ foo: "bar" })
    .expect(400)
})

test("Create hello returns 201 given valid input", async () => {
  request
    .post("/api/v1/hellos")
    .send({ message: "hello message" })
    .expect(201)
})
