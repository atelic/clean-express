import { CreateHelloRequest } from "../../../../../src/web/models/request/CreateHelloRequest"
import { Hello } from "../../../../../src/app/entities/hello"

test("constructor sets message and author given valid body", () => {
  const actual = new CreateHelloRequest({
    message: "message",
    author: "author",
  })
  expect(actual.message).toBe("message")
  expect(actual.author).toBe("author")
})

test("constructor does not set author given only a message", () => {
  const actual = new CreateHelloRequest({
    message: "message",
  })

  expect(actual.message).toBe("message")
  expect(actual.author).toBe(undefined)
})

test("validate returns errors given no message exists", () => {
  const dto = new CreateHelloRequest({ message: null })
  const actual = dto.validate()

  expect(actual).toBeTruthy()
})

test("validate returns nothing given message exists", () => {
  const dto = new CreateHelloRequest({ message: "message" })
  const actual = dto.validate()

  expect(actual).toBeFalsy()
})

test("toModel returns a Hello with the existing information", () => {
  const dto = new CreateHelloRequest({ message: "my message", author: "me" })

  const actual = dto.toModel()
  expect(actual.message).toBe("my message")
  expect(actual.author).toBe("me")
})
