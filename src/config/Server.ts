import "reflect-metadata"
import express, {Application, json, urlencoded} from "express"
import * as http from "http"
import {MariadbDataSource} from "./MariadbDataSource"
import {ServerConfig} from "../env"

class Server
{
   private readonly app: Application
   private readonly httpServer: http.Server

   constructor() {
      this.app = express()
      this.httpServer = http.createServer(this.app)
   }

   start(callback?: (port: number) => void): void {
      this.connectDatabase()
      this.configureApp()

      this.httpServer.listen(ServerConfig.port)
      callback && callback(ServerConfig.port)
   }

   connectDatabase(): void {
      MariadbDataSource.initialize()
         .then(() => {
            console.log("--- connect database successfully")
         })
         .catch((error) => {
            console.log("--- database is dump")
            console.error(error)
            console.log("--------------------")
         })
   }

   configureApp(): void {
      this.app.use(json())
      this.app.use(urlencoded({extended: true}))
   }
}

export {Server}