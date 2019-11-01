import HttpStatus from "http-status-codes"
import { mockRequest, mockResponse } from "mock-req-res"

import { Hello } from "../../../../../src/app/entities/hello"
import { HelloRepository } from "../../../../../src/infra/repositories/HelloRepository"
import { HelloService } from "../../../../../src/app/services/HelloService"
import { getHellos } from "../../../../../src/web/controllers/HelloWorldController"

test("getHellos returns empty list given service returns empty list", async () => {
  const helloService = new HelloService(new HelloRepository())
  helloService.getHellos = jest.fn().mockReturnValue(<Hello[]>[])

  const req = mockRequest()
  const res = mockResponse()

  const controller = getHellos(helloService)
  const actual = await controller(req, res)

  const expectedResponse: any[] = []
  expect(res.send.calledWith(expectedResponse)).toBe(true)
  expect(res.status.calledWith(HttpStatus.OK)).toBe(true)
})

test("getHellos returns array of hellos given service returns at least one", async () => {
  const helloService = new HelloService(new HelloRepository())

  const hello: Hello = new Hello()
  hello.author = "a person"
  hello.message = "a message"

  const hellos: Hello[] = [hello]

  helloService.getHellos = jest.fn().mockReturnValue(hellos)

  const req = mockRequest()
  const res = mockResponse()

  const controller = getHellos(helloService)
  const actual = await controller(req, res)

  expect(res.send.calledWith(hellos)).toBe(true)
  expect(res.status.calledWith(HttpStatus.OK)).toBe(true)
})
