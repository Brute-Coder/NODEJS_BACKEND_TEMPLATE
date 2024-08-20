const ResponseMessage = {
    SUCCESS: "Api request success",
    NOT_FOUND: (entity: string): string => `${entity} not found`,
    INTERNAL_SERVER_ERROR: "Internal server error",
    BAD_REQUEST: "Bad request"
}

export default ResponseMessage

