require("dotenv").config()

const ServerConfig: any = {
   port: process.env.APP_PORT as any
}

export {ServerConfig}