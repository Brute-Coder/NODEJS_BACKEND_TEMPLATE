import { Router } from "express"
import apicontroller from "../controller/apiController"

const router = Router()

router.route("/self").get(apicontroller.getSelf)

export default router

