import app from "./app"
import config from "./config/config"

const server = app.listen(config.PORT)

;(() => {
    try {
        //database connection
        // eslint-disable-next-line no-console
        console.info(`APPLICATION_STARTED`, {
            meta: { PORT: config.PORT, NODE_ENV: config.ENV, SERVER_URL: config.SERVER_URL }
        })
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`APPLICATION_ERROR`, {
            meta: err
        })
        server.close((err) => {
            if (err) {
                // eslint-disable-next-line no-console
                console.error(`APPLICATION_ERROR`, {
                    meta: err
                })
            }
            process.exit(1)
        })
    }
})()

