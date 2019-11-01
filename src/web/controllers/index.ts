import { Router } from "express";

// Import configured services
import { helloService } from "../container";

// import controllers
import { HelloWorldController } from "./HelloWorldController";

// Configure routes and pass in services
const router = Router();
router.use("/hellos", HelloWorldController(helloService));

export { router };
