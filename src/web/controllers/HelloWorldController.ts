import express, { Request, Response, Router } from "express"
import HttpStatus from "http-status-codes"

import IHelloService from "../../app/interfaces/IHelloService"
import CreateHelloRequest from "../models/request/CreateHelloRequest"
/**
 * @swagger
 * definitions:
 *   NewHello:
 *     type: object
 *     required:
 *       - message
 *     properties:
 *       message:
 *         type: string
 *       author:
 *         type: string
 *   Hello:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *       author:
 *         type: string
 *       id:
 *         type: string
 */

/**
 * @swagger
 * /api/v1/hellos:
 *   get:
 *     tags:
 *     - "Hellos"
 *     summary: Get all hellos.
 *     description: Returns all hellos from the database.
 *     produces:
 *       application/json
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Hello'
 */
export const getHellos = (helloService: IHelloService) => {
  return async (req: Request, res: Response) => {
    const hellos = await helloService.getHellos()

    return res.status(HttpStatus.OK).send(hellos)
  }
}

/**
 * @swagger
 * /api/v1/hellos:
 *   post:
 *     tags:
 *     - "Hellos"
 *     summary: Create a hello message.
 *     description: Creates a Hello.
 *     produces:
 *       application/json
 *     parameters:
 *       - in: body
 *         name: message
 *         description: Message for the hello
 *         required: true
 *         type: string
 *       - in: body
 *         description: Author of the hello
 *         required: false
 *         type: string
 *     responses:
 *       400:
 *         description: "Invalid input - no message"
 *       201:
 *         description: Hello created
 */
export const createHello = (helloService: IHelloService) => {
  return async (req: Request, res: Response) => {
    const requestedHello = new CreateHelloRequest(req.body)

    const errors = requestedHello.validate()
    if (errors) {
      return res.status(HttpStatus.BAD_REQUEST).send(errors)
    }

    const resp = await helloService.createHello(requestedHello.toModel())

    return res.status(HttpStatus.CREATED).send(resp)
  }
}

export default (helloService: IHelloService): Router => {
  const router = express.Router()
  router.get("/", getHellos(helloService))
  router.post("/", createHello(helloService))

  return router
}
