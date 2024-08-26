import express, { Application, Request, Response, NextFunction } from "express"
import path from "path"
import router from "./router/apiRouter"
import globalErrorHandler from "./middleware/globalErrorHandler"
import httpError from "./util/httpError"
import ResponseMessage from "./constant/responseMessage"
import healthRouter from "./router/healthRouter"

const app: Application = express()

//Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, "../", "public")))

//Main Router
const mainRouter = express.Router()

// Registering Sub Router
mainRouter.use(router)
mainRouter.use(healthRouter)

// Registering Main Router
app.use("/api/v1", mainRouter)

// 404 Not Found Route
app.use((req: Request, _: Response, next: NextFunction) => {
  try {
    throw new Error(ResponseMessage.NOT_FOUND("Route"))
  } catch (error) {
    httpError(next, error, req, 404)
  }
})

// GLOBAL ERROR HANDLER FallBack
app.use(globalErrorHandler)

export default app

