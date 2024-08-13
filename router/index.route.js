import { Router } from "express"
const router = Router();

import authRouter from "./auth.route.js";
import clientRouter from "./client.router.js"
import artisanRouter from "./artisan.route.js"
import serviceRouter from "./service.route.js"
import jobRouter from "./job.route.js"

router.use("/api/v1/auth", authRouter)
router.use("/api/v1/client", clientRouter)
router.use("/api/v1/artisan", artisanRouter)
router.use("/api/v1/service", serviceRouter)
router.use("/api/v1/job", jobRouter)

export default router;