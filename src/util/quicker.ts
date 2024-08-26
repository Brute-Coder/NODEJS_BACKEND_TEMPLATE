import os from "os"
import config from "../config/config"

export default {
  getSystemHealth: () => {
    try {
      return {
        cpuUsage: os.loadavg(),
        totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
        freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
        timeStamp: new Date().toISOString()
      }
    } catch (err) {
      throw err
    }
  },
  getApplicationHealth: () => {
    try {
      return {
        status: "UP",
        environment: config.ENV,
        uptime: `${process.uptime().toFixed(2)} seconds`,
        memoryUsage: {
          heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
          heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
        },
        timeStamp: new Date().toISOString()
      }
    } catch (err) {
      throw err
    }
  }
}