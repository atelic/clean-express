import dotenv from "dotenv"

import { app } from "./web"

dotenv.config()

const port = process.env.PORT || 8080
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
