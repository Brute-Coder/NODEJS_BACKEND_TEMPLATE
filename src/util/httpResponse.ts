import { Request, Response } from "express"
import { THttpRensponse } from "../types/types"
import config from "../config/config"
import { EApplicationEnvirontment } from "../constant/application"
import logger from "./logger"

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown = null): void => {
    const response: THttpRensponse = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.url
        },
        message: responseMessage,
        data: data
    }
    // Log the response
    logger.info(`CONTROLLER RESPONSE: `, {
        meta: response
    })

    // Production should not return ip
    if (config.ENV === EApplicationEnvirontment.PRODUCTION) {
        delete response.request.ip
    }

    res.status(responseStatusCode).json(response)
}

