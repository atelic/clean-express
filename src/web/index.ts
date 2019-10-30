import express from "express"
import helmet from "helmet"
import Knex from "knex"
import { Model } from "objection"
import swaggerUi from "swagger-ui-express"

import { IKnexConfig } from "../data/knexConfig.interface"
import routes from "./controllers"

// tslint:disable-next-line:no-var-requires
const knexConfig: IKnexConfig = require("./knexfile")
import requestLogger from "./middleware/logging"
import { swaggerSpec } from "./swagger"

// Initialize knex with the current environment
const knex = Knex(knexConfig[process.env.NODE_ENV || "development"])

// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex)

const app = express()

// Helmet is a collection of middleware
// that help secure our app with various HTTP headers
app.use(helmet())
// Parse incoming requests with JSON payloads
app.use(express.json())
// A simple request logging middleware
app.use(requestLogger)

// Apply version prefix to router
app.use("/api/v1", routes)

// Serve our auto-generated docs
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default app
