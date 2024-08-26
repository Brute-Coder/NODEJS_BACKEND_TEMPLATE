import quicker from "../util/quicker"
import { Request, Response, NextFunction } from "express"
import httpResponse from "../util/httpResponse"
import httpError from "../util/httpError"
import ResponseMessage from "../constant/responseMessage"

export default {
  getOverAllHealth: (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
      const healthData = {
        system: quicker.getSystemHealth(),
        application: quicker.getApplicationHealth()
      }
      return httpResponse(req, res, 200, ResponseMessage.SUCCESS, healthData)
    } catch (err) {
      return httpError(nextFunc, err, req)
    }
  },
  getSystemHealth: (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
      const healthData = quicker.getSystemHealth()
      httpResponse(req, res, 200, ResponseMessage.SUCCESS, { ...healthData })
    } catch (error) {
      httpError(nextFunc, error, req)
    }
  },
  getApplicationHealth: (req: Request, res: Response, nextFunc: NextFunction) => {
    try {
      const healthData = quicker.getApplicationHealth()
      httpResponse(req, res, 200, ResponseMessage.SUCCESS, { ...healthData })
    } catch (error) {
      httpError(nextFunc, error, req)
    }
  }
}

