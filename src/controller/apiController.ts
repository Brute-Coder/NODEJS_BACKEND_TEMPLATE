import { NextFunction, Request, Response } from "express"
import httpResponse from "../util/httpResponse"
import httpError from "../util/httpError"
import ResponseMessage from "../constant/responseMessage"
export default {
    getSelf: (req: Request, res: Response, nextFunc: NextFunction) => {
        try {
            // throw new Error("This is an error")
            httpResponse(req, res, 200, ResponseMessage.SUCCESS, { name: "soumya" })
        } catch (error) {
            httpError(nextFunc, error, req)
        }
    }
}

