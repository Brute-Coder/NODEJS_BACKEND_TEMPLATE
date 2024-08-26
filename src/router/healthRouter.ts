import { Router } from "express"
import healthController from "../controller/healthController"

const healthRouter = Router()

healthRouter.route("/health").get(healthController.getOverAllHealth)
healthRouter.route("/health/system").get(healthController.getSystemHealth)
healthRouter.route("/health/application").get(healthController.getApplicationHealth)

export default healthRouter

