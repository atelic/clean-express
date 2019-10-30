import { Router } from "express";

// Import configured services
import { helloService } from "../container";

// import controllers
import hellos from "./HelloWorldController";

// Configure routes and pass in services
const router = Router();
router.use("/hellos", hellos(helloService));

export default router;
