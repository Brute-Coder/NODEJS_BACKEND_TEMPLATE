import config from "../config/config"
import ResponseMessage from "../constant/responseMessage"
import { THttpError } from "../types/types"
import { Request } from "express"
import logger from "./logger"

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (err: Error | unknown, req: Request, errorStatusCode: number = 500): THttpError => {
    const errorObj: THttpError = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message: err instanceof Error ? err.message || ResponseMessage.INTERNAL_SERVER_ERROR : ResponseMessage.INTERNAL_SERVER_ERROR,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    }
    // Log the Error
    logger.error(`CONTROLLER ERROR: `, {
        meta: errorObj
    })

    // Production should not return stack trace
    if (config.ENV === "production") {
        delete errorObj.request.ip
        delete errorObj.trace
    }

    return errorObj
}

